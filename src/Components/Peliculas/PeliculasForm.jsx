import axios from 'axios';
import React from 'react';

class PeliculasForm extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }
    
    //Funcion para enviar request POST al endpoint
    submitNuevaPelicula(e){
        //Anular comportamiento por defecto del form
        e.preventDefault();
        //peticion con axios
        axios.post('http://localhost:5010/peliculas', {
            nombre: this.refs.nombre.value,
            año_lanzamiento: this.refs.año_lanzamiento.value,
            sinopsis: this.refs.sinopsis.value,
            genero: this.refs.genero.value,
            director: this.refs.director.value,
            duracion: this.refs.duracion.value,
            idioma: this.refs.idioma.value,
            popularidad: this.refs.popularidad.value
        }).then((res)=>{
            console.log(res.data);
            window.location.reload();
        }
        ).catch(err=>console.log(err));
    }

    render(){
        return (
            <div className="container" style={{
                'backgroundColor': '#eeeeee',
                'padding': '20px 40px',
                'marginBottom': '30px',
                'borderRadius': '5px'
            }}>
               <div className="row">
                   <h4 className="center"><strong>Nueva Pelicula</strong></h4>
                    <form className="col s12" onSubmit={this.submitNuevaPelicula.bind(this)}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="nombre" ref="nombre" type="text" className="validate" />
                                <label htmlFor="nombre">Nombre: </label>
                            </div>
                            <div className="input-field col s6">
                                <input id="año_lanzamiento" ref="año_lanzamiento" type="date" className="validate" />
                                <label htmlFor="año_lanzamiento">Año de lanzamiento: </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="textarea input-field col s12">
                                <textarea name="sinopsis" id="sinopsis" className="materialize-textarea validate" data-length="300" ref="sinopsis"></textarea>
                                <label htmlFor="sinopsis">Sinopsis: </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="director" ref="director" type="text" className="validate" />
                                <label htmlFor="email">Director: </label>
                            </div>
                            <div className="input-field col s6">
                                <input id="duracion" ref="duracion" type="number" className="validate" />
                                <label htmlFor="duracion">Duración: </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="genero" ref="genero" type="text" className="validate" />
                                <label htmlFor="genero">Genero: </label>
                            </div>
                            <div className="input-field col s6">
                                <input id="idioma" ref="idioma" type="text" className="validate" />
                                <label htmlFor="idioma">Idioma: </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="popularidad" ref="popularidad" type="number" className="validate" />
                                <label htmlFor="popularidad">Popularidad: </label>
                            </div>
                        </div>
                        <div>
                            <button type="submit" name="action" className="waves-effect waves-light btn">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
   
}

export default PeliculasForm;
