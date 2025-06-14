import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getProduct } from "src/lib/api/api";
import { Layout } from "src/components/layout";
import { ProductCard } from "src/components/product-card";

const ProductosPage = () => {
  const router = useRouter();
  const [productos, setProductos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filtroCategoria, setFiltroCategoria] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [pagination, setPagination] = useState({
    total: 0,
    limit: 12,
    offset: 0,
  });

  // Función para cargar productos
  const cargarProductos = async (offset: number = 0) => {
    setLoading(true);
    try {
      const data = await getProduct(searchQuery, pagination.limit, offset);
      setProductos(data.results);
      setPagination(data.pagination);
      setLoading(false);
    } catch (error) {
      console.error("Error al cargar productos:", error);
      setLoading(false);
    }
  };

  // Llamar la función cargarProductos al montar el componente o cambiar la búsqueda
  useEffect(() => {
    cargarProductos(pagination.offset);
  }, [searchQuery, pagination.offset]);

  return (
    <>
      <Head>
        <title>Productos - Mi Tienda</title>
      </Head>
      <Layout form={true} sticky={false}>
        <div className="min-h-screen p-8">
          <h1 className="mb-6 text-3xl font-bold">Nuestros Productos</h1>

          {/* Barra de búsqueda */}
          {/* Input que controla el estado de búsqueda */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Buscar productos... mesa, silla, alfombras, lamparas"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Mostrar productos */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {productos.map((producto) => (
                <div key={producto.id} className="p-4">
                  <ProductCard key={producto.id} producto={producto} />
                </div>
              ))}
            </div>
          )}

          {/* Paginación */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() =>
                cargarProductos(pagination.offset - pagination.limit)
              }
              disabled={pagination.offset <= 0}
              className="p-2 bg-red-200 rounded cursor-pointer"
            >
              Anterior
            </button>
            <button
              onClick={() =>
                cargarProductos(pagination.offset + pagination.limit)
              }
              disabled={
                pagination.offset + pagination.limit >= pagination.total
              }
              className="p-2 bg-red-200 rounded cursor-pointer"
            >
              Siguiente
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductosPage;
