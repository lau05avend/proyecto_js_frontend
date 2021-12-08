import axios from 'axios';
import React from 'react';

const PeliculasDetalle = (props) => {
    const submitDelete=()=>{
            axios.delete(`http://localhost:5010/peliculas/${props.peliculaDetalle._id}`)
            .then(()=>{
                alert('El registro se ha eliminado Correctamente');
                window.location.reload();
            })
            .catch((err)=>alert(`Ha ocurrido un error ${err}`));
    }

    return (
        <div>
            <div className="row">
                <div className="col s12 m10 ">
                    <div className="card teal lighten-3">
                        <div className="card-content ">
                            <div className="row">
                                <span className="col s10 card-title"><strong>{props.peliculaDetalle.nombre} {props.peliculaDetalle.genero}</strong></span>
                                <span className="col s2" style={{marginRight:'0px' }}>Rating: {props.peliculaDetalle.popularidad}</span>
                            </div>
                            <div className="row">
                                <div className="col s6">
                                    <p><strong>Sinopsis: </strong><br />{props.peliculaDetalle.sinopsis} </p>
                                    <p><strong>Director: </strong>{props.peliculaDetalle.director}</p>
                                    <p><strong>Duración (minutos): </strong>{props.peliculaDetalle.duracion}</p>
                                </div>
                                <div className="col s6">
                                    <p><strong>Año lanzamiento: </strong><br />{props.peliculaDetalle.año_lanzamiento} </p>
                                    <p><strong>Genero: </strong>{props.peliculaDetalle.genero}</p>
                                    <p><strong>Idioma: </strong>{props.peliculaDetalle.idioma}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-action">
                            <button name="action" className="waves-effect red btn" onClick={submitDelete}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PeliculasDetalle;

