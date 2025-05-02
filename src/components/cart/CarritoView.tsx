// src/pages/carrito.tsx
import { useCarrito } from "src/context/CarrtitoContext";
import Head from "next/head";

const CarritoPage = () => {
  const { carrito, quitarDelCarrito, vaciarCarrito, total } = useCarrito();
  console.log(carrito);

  return (
    <>
      <Head>
        <title>Tu Carrito | Deco & Home</title>
      </Head>

      <main className="min-h-screen px-4 py-12 bg-gray-100">
        <h1 className="mb-6 text-4xl font-bold text-center">Tu carrito</h1>

        {carrito.length === 0 ? (
          <p className="text-center text-gray-600">Tu carrito está vacío 🛒</p>
        ) : (
          <div key={carrito} className="max-w-3xl mx-auto space-y-6">
            {carrito.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-white rounded shadow"
              >
                <div className="flex items-center gap-4">
                  {item.imagen && (
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="object-cover w-20 h-20 rounded"
                    />
                  )}
                  <div>
                    <h2 className="text-lg font-semibold">{item.nombre}</h2>
                    <p className="text-gray-600">
                      Cantidad: {item.cantidad || 1}
                    </p>
                    <p className="font-bold text-gray-800">
                      ${item.precio * (item.cantidad || 1)}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => quitarDelCarrito(item.id)}
                  className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Quitar uno
                </button>
              </div>
            ))}

            <div className="flex justify-between pt-4 mt-6 border-t">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold text-blue-600">${total}</span>
            </div>

            <button
              onClick={vaciarCarrito}
              className="w-full px-4 py-3 mt-4 font-semibold text-white bg-red-600 rounded hover:bg-red-700"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default CarritoPage;
