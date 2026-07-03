import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "mkraj_customer_address";
const ORDER_KEY = "mkraj_pending_order_message";
const WHATSAPP_NUMBER = "919794022167";

const defaultAddress = {
  name: "",
  phone: "",
  address: "",
  city: "",
  pincode: "",
};

const OrderContext = createContext(null);

export function OrderProvider({ children }) {
  const [customer, setCustomer] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...defaultAddress, ...JSON.parse(saved) } : defaultAddress;
    } catch {
      return defaultAddress;
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
    localStorage.setItem(ORDER_KEY, pendingOrderMessage);
  }, [pendingOrderMessage]);

  const updateCustomer = (field, value) => {
    setCustomer((current) => ({ ...current, [field]: value }));
  };

  const resetCustomer = () => setCustomer(defaultAddress);

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

  const createWhatsAppLink = (message = pendingOrderMessage) => {
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
