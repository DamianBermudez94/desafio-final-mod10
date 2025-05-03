import { useEffect, useState } from "react";
import { getProduct } from "src/lib/api/api"; // Tu función que obtiene los productos
import { Layout } from "src/components/layout";
import Head from "next/head";

const ProductosPage = () => {
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
          <div className="mb-4">
            <input
              type="text"
              placeholder="Buscar productos"
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
                <div key={producto.id} className="p-4 border rounded shadow-sm">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="object-cover w-full h-40 mb-4"
                  />
                  <h3 className="text-xl font-semibold">{producto.nombre}</h3>
                  <p className="text-lg">{producto.precio}$</p>
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
              className="p-2 bg-gray-200 rounded"
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
              className="p-2 bg-gray-200 rounded"
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
