import type { CategoriaConCantidadProductos } from "../types/categoria"




type CategoriaFilaProps = {
    index:number,
    categoria:CategoriaConCantidadProductos
}

export default function CategoriaFila({index,categoria}:CategoriaFilaProps){
    return(
        <tr>
            <td>{index+1}</td>
            <td>{categoria.nom_categoria}</td>
            <td>{categoria.cantidadVehiculos}</td> 
        </tr>
    )
}