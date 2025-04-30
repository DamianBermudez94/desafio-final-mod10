// src/components/CartIcon.tsx
import Link from "next/link";
import { useCarrito } from "src/context/CarrtitoContext";
import { ShoppingCart } from "lucide-react"; // O el ícono que uses

export const CartIcon = () => {
  const { carrito } = useCarrito();
  const cantidad = carrito.reduce((acc, item) => acc + (item.cantidad || 1), 0);

  return (
    <Link href="/cart" className="relative inline-block">
      <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-gray-900" />
      {cantidad > 0 && (
        <span className="absolute top-[-6px] right-[-6px] flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
          {cantidad}
        </span>
      )}
    </Link>
  );
};
