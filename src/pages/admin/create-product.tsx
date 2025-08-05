// pages/product-admin/create.tsx
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function CrearProducto() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState(0);
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/products", {
        nombre,
        precio,
        descripcion,
      });
      alert("Producto creado con éxito");
      router.push("/product-admin");
    } catch (error) {
      alert("Error al crear el producto");
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl p-8 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Crear nuevo producto</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre del producto"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(Number(e.target.value))}
          placeholder="Precio"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded"
        >
          Crear producto
        </button>
      </form>
    </div>
  );
}
