export type Producto = {
    id: string;
    nombre: string;
    precio: number;
    Description: string
    imagen: string,
    tipo: string;
    color: string;
    enStock: boolean
};

export type ProductoType = Producto & {
    objectID: string;
    productId: string,
    Name: string;
    Unit_cost: number;
    Description: string;
    Images: {
        id: string;
        url: string;
        filename: string;
        width: number;
        height: number;
        size: number;
        type: string;
        thumbnails: {
            small: { url: string; width: number; height: number };
            large: { url: string; width: number; height: number };
            full: { url: string; width: number; height: number };
        };
    }[];
    Type: string,
    Color: string,
    In_stock: string
};
