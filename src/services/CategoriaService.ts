// src/services/CategoriaService.ts
import axiosClient from "../api/axiosClient";
import { parse } from "valibot";
import { CategoriasConCantidadProductosSchema } from "../types/categoria";

export const getCategoriasConCantidadProductos = async () => {
  try {
    const response = await axiosClient.get("/categorias");

    // ✅ valibot espera los mismos campos que vienen del backend
    const categorias = parse(CategoriasConCantidadProductosSchema, response.data.data);

    return categorias;
  } catch (error: any) {
    console.error("ERROR DETALLADO:", error.response?.data || error.message);
    throw new Error("Hubo un problema al pedir datos");
  }
};
