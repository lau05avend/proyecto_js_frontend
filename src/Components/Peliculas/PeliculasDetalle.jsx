import axios from 'axios';
import React from 'react';
import Moment from 'moment';

const PeliculasDetalle = (props) => {
    const submitDelete=()=>{
            axios.delete(`http://localhost:5010/peliculas/${props.peliculaDetalle._id}`)
            .then(()=>{
                alert('El registro se ha eliminado Correctamente');
                window.location.reload();
            })
            .catch((err)=>alert(`Ha ocurrido un error ${err}`));
    }
    

    if(props.peliculaDetalle.nombre != null){
    return (
        <div>
            <div className="row">
                <div className="col s12 m10 ">
                    <div className="card teal lighten-3">
                        <div className="card-content ">
                            <div className="row">
                                <span className="col s10 card-title"><strong>{props.peliculaDetalle.nombre}</strong></span>
                                <span className="col s2" style={{marginRight:'0px' }}>Rating: {props.peliculaDetalle.popularidad}</span>
                            </div>
                            <div className="row">
                                <div className="col s6">
                                    <p><strong>Sinopsis: </strong><br />{props.peliculaDetalle.sinopsis} </p><br />
                                    <p><strong>Director: </strong>{props.peliculaDetalle.director}</p>
                                </div>
                                <div className="col s6">
                                    <p><strong>Año lanzamiento: </strong><br />{ Moment(props.peliculaDetalle.año_lanzamiento).add(1, 'days').format('LL') } </p><br />
                                    <p><strong>Genero: </strong>{props.peliculaDetalle.genero}</p>
                                    <p><strong>Idioma: </strong>{props.peliculaDetalle.idioma}</p>
                                    <p><strong>Duración (minutos): </strong>{props.peliculaDetalle.duracion}</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-action">
                            <button name="action" className="waves-effect red btn" onClick={()=>{
                                if(window.confirm("¿Esta seguro de eliminar esta pelicula?")){submitDelete()}
                            }}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
    else{
        return (
            <div>
                <div className="row">
                    <div className="col s12 m10 ">
                        <div className="card teal lighten-3">
                            <div className="card-content ">
                                <div className="row">
                                    <h5>Detalle de Pelicula</h5>
                                    <span>Seleccione una pelicula en el menú izquierdo para ver el detalle</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PeliculasDetalle;

