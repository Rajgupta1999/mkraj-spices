import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "mkraj_customer_address";
const ORDER_KEY = "mkraj_pending_order_message";
const BASKET_KEY = "mkraj_basket_items";
const WHATSAPP_NUMBER = "916398033582"; // WhatsApp number without '+' or leading zeros

const defaultAddress = {
  name: "",
  phone: "",
  address: "",
  city: "",
  pincode: "",
};

const OrderContext = createContext(null);

const buildItemKey = (spiceId, weight) => `${spiceId}-${weight}`;

export function OrderProvider({ children }) {
  const [customer, setCustomer] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...defaultAddress, ...JSON.parse(saved) } : defaultAddress;
    } catch {
      return defaultAddress;
    }
  });

  const [basketItems, setBasketItems] = useState(() => {
    try {
      const saved = localStorage.getItem(BASKET_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [pendingOrderMessage, setPendingOrderMessage] = useState(() => {
    try {
      return localStorage.getItem(ORDER_KEY) || "Namaste! Mujhe MK Raj Spices ka order karna hai.\nPlease confirm karein.";
    } catch {
      return "Namaste! Mujhe MK Raj Spices ka order karna hai.\nPlease confirm karein.";
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customer));
  }, [customer]);

  useEffect(() => {
    localStorage.setItem(BASKET_KEY, JSON.stringify(basketItems));
  }, [basketItems]);

  useEffect(() => {
    localStorage.setItem(ORDER_KEY, pendingOrderMessage);
  }, [pendingOrderMessage]);

  const updateCustomer = (field, value) => {
    setCustomer((current) => ({ ...current, [field]: value }));
  };

  const resetCustomer = () => setCustomer(defaultAddress);

  const addToBasket = (spice, pack, qty = 1) => {
    const quantity = Math.max(1, Number(qty) || 1);
    const key = buildItemKey(spice.id || spice.slug, pack.weight);

    setBasketItems((current) => {
      const existing = current.find((item) => item.key === key);
      if (existing) {
        return current.map((item) =>
          item.key === key ? { ...item, qty: item.qty + quantity } : item
        );
      }

      return [
        ...current,
        {
          key,
          spiceId: spice.id || spice.slug,
          slug: spice.slug,
          name: spice.name,
          hindi: spice.hindi,
          weight: pack.weight,
          price: Number(pack.price),
          qty: quantity,
          image: spice.image,
        },
      ];
    });
  };

  const updateBasketQty = (key, qty) => {
    const quantity = Math.max(0, Number(qty) || 0);
    setBasketItems((current) =>
      quantity === 0
        ? current.filter((item) => item.key !== key)
        : current.map((item) => (item.key === key ? { ...item, qty: quantity } : item))
    );
  };

  const increaseBasketQty = (key) => {
    setBasketItems((current) =>
      current.map((item) => (item.key === key ? { ...item, qty: item.qty + 1 } : item))
    );
  };

  const decreaseBasketQty = (key) => {
    setBasketItems((current) =>
      current
        .map((item) => (item.key === key ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromBasket = (key) => {
    setBasketItems((current) => current.filter((item) => item.key !== key));
  };

  const clearBasket = () => setBasketItems([]);

  const basketCount = useMemo(
    () => basketItems.reduce((total, item) => total + item.qty, 0),
    [basketItems]
  );

  const basketTotal = useMemo(
    () => basketItems.reduce((total, item) => total + item.price * item.qty, 0),
    [basketItems]
  );

  const basketText = useMemo(() => {
    if (!basketItems.length) return "No item selected";

    const lines = basketItems.map((item, index) => {
      const lineTotal = item.price * item.qty;
      return `${index + 1}. MK Raj ${item.name} (${item.weight}) - ₹${item.price} x ${item.qty} = ₹${lineTotal}`;
    });

    lines.push(`Total Items: ${basketCount}`);
    lines.push(`Grand Total: ₹${basketTotal}`);
    return lines.join("\n");
  }, [basketItems, basketCount, basketTotal]);

  const customerText = useMemo(() => {
    const lines = [];

    if (customer.name.trim()) lines.push(`Name: ${customer.name.trim()}`);
    if (customer.phone.trim()) lines.push(`Mobile: ${customer.phone.trim()}`);
    if (customer.address.trim()) lines.push(`Address: ${customer.address.trim()}`);
    if (customer.city.trim()) lines.push(`City/Village: ${customer.city.trim()}`);
    if (customer.pincode.trim()) lines.push(`Pincode: ${customer.pincode.trim()}`);

    return lines.join("\n");
  }, [customer]);

  const isAddressComplete = useMemo(() => {
    return Boolean(
      customer.name.trim() &&
        customer.phone.trim() &&
        customer.address.trim() &&
        customer.city.trim() &&
        customer.pincode.trim()
    );
  }, [customer]);

  const buildBasketMessage = () => {
    if (basketItems.length) {
      return `Namaste! Mujhe MK Raj Spices ka order karna hai.\n\nOrder Details:\n${basketText}\n\nPlease confirm karein.`;
    }
    return pendingOrderMessage;
  };

  const createWhatsAppLink = (message = buildBasketMessage()) => {
    const fullMessage = `${message}\n\nCustomer Details:\n${customerText || "Address not filled"}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
  };

  const value = {
    customer,
    updateCustomer,
    resetCustomer,
    customerText,
    isAddressComplete,
    pendingOrderMessage,
    setPendingOrderMessage,
    createWhatsAppLink,
    whatsappNumber: WHATSAPP_NUMBER,
    basketItems,
    basketCount,
    basketTotal,
    basketText,
    addToBasket,
    updateBasketQty,
    increaseBasketQty,
    decreaseBasketQty,
    removeFromBasket,
    clearBasket,
    buildBasketMessage,
  };

  return <OrderContext.Provider value={value}>{children}</OrderContext.Provider>;
}

export function useOrder() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrder must be used inside OrderProvider");
  }

  return context;
}
