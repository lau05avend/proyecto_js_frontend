import React from 'react';

const PeliculasLista = (props) => {
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header"><h4><strong>Peliculas</strong></h4></li>
                
                {
                    props.listaPeliculas.map((element)=>{
                        return (
                            <li className="collection-item" 
                                key={element._id}
                                onClick={props.actualizarPelicula.bind(this, element)}
                                style={{
                                    'cursor': 'pointer'
                                }}
                            >{element.nombre} = {element.genero}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default PeliculasLista;
