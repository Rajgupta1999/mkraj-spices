import { Link } from "react-router-dom";
import { useOrder } from "../context/OrderContext";

export default function OrderLink({ message, children, className, style, ariaLabel, onClick }) {
  const { setPendingOrderMessage } = useOrder();

  const handleClick = (event) => {
    setPendingOrderMessage(message || "Namaste! Mujhe MK Raj Spices ka order karna hai.\nPlease confirm karein.");
    if (onClick) onClick(event);
  };

  return (
    <Link
      to="/address"
      className={className}
      style={style}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
