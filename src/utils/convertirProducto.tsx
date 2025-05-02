// funcion que me transformar los tipos de datos a propiedades mas comunes

import { ProductoType, Producto } from "../types"; // adaptá el path según tu estructura

export function convertirProducto(p: ProductoType): Producto {
  return {
    id: p.productId,
    nombre: p.Name,
    precio: p.Unit_cost,
    descripcion: p.Description,
    imagenPrincipal: p.Images[0]?.url || "",
    tipo: p.Type,
    color: p.Color,
    enStock:
      typeof p.In_stock === "string"
        ? p.In_stock.toLowerCase() === "yes"
        : p.In_stock === 1 || p.In_stock === true,
  };
}
