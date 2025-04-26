import { useEffect, useState } from "react";
import { fetchApi } from "src/lib/api/api"; // Asegurate de importar tu función fetchApi
import { Layout } from "src/components/layout";
import Head from "next/head";

const ProductosPage = () => {
  const [productos, setProductos] = useState<any[]>([]); // Aquí guardamos los productos
  const [loading, setLoading] = useState<boolean>(true); // Para saber si los productos se están cargando
  const [filtroCategoria, setFiltroCategoria] = useState<string | null>(null); // Filtro por categoría
  const [searchQuery, setSearchQuery] = useState<string>(""); // Filtro por búsqueda

  // Función para traer los productos de la API
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await fetchApi("/products"); // Asumí que esta es la ruta correcta
        setProductos(response);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar productos:", error);
        setLoading(false);
      }
    };

    obtenerProductos();
  }, []);

  // Filtrar productos según la categoría y la búsqueda
  const productosFiltrados = productos
    .filter((p) => (filtroCategoria ? p.categoria === filtroCategoria : true))
    .filter((p) => p.nombre.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <Head>
        <title>Productos - Mi Tienda</title>
      </Head>
      <Layout>
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

          {/* Filtro por categoría */}
          <div className="mb-4">
            <select
              value={filtroCategoria || ""}
              onChange={(e) => setFiltroCategoria(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Seleccionar categoría</option>
              <option value="categoria1">Categoría 1</option>
              <option value="categoria2">Categoría 2</option>
              {/* Agregá más opciones de categorías según lo que tengas */}
            </select>
          </div>

          {/* Mostrar productos mientras se cargan */}
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {productosFiltrados.map((producto) => (
                <div key={producto.id} className="p-4 border rounded shadow-sm">
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="object-cover w-full h-40 mb-4"
                  />
                  <h3 className="text-xl font-semibold">{producto.nombre}</h3>
                  <p className="text-lg">{producto.precio} USD</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default ProductosPage;
