import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, Route, useRouteMatch } from "react-router";
import ListaCategorias from "../components/ListaCategorias";
import ListaPost from "../components/ListaPost";

const Categoria = () =>{
const {id} = useParams()
const{path} =useRouteMatch()
const[subcategorias, setSubCategorias] = useState([])

useEffect(() =>
    buscar()
)
    return(
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategorias/>
            
            <Route exact path = {`${path}/`}>
                <ListaPost url={`/posts?categoria=${id}`}/>
            </Route>
        </>
    )
}
export default Categoria