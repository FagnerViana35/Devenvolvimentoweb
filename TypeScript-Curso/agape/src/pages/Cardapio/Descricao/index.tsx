import { useParams } from "react-router-dom"
import itens from '../Filtros/filtros.json'




export default function Descricao(){
    const { id } = useParams() 
   const findItens =  itens.find(iten => iten.id === id);
    

    
    return(
        <div>
          { id }
        </div>
    )
}