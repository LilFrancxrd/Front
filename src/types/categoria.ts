import { array, number, object, string, type InferOutput } from "valibot";


export const CategoriaConCantidadProductoSchema = object({
    id_categoria: string(),
    nom_categoria: string(),
    cantidadVehiculos: number(),
});


export const CategoriasConCantidadProductosSchema = array(CategoriaConCantidadProductoSchema);

export type CategoriaConCantidadProductos = InferOutput<typeof CategoriaConCantidadProductoSchema>; // 👈 Un solo objeto
export type ListaCategoriasConCantidadProductos = InferOutput<typeof CategoriasConCantidadProductosSchema>; // 👈 Arreglo
