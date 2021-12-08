import React from 'react'; 
import 'moment/locale/es-mx';
import PeliculasLista from "./Peliculas/PeliculasLista";
import PeliculasDetalle from "./Peliculas/PeliculasDetalle";
import PeliculasForm from "./Peliculas/PeliculasForm";
import axios from 'axios';
import "./App.css";

class App extends React.Component {

    constructor(props){
        super(props)
        this.state={
            peliculas:[],
            peliculaActual:{}
        }
        //vincular la funcion actualizarPelicula al objeto - Metodo como propiedad
        this.actualizarPelicula=this.actualizarPelicula.bind(this)
    }
    
    componentDidMount(){
        const URL='http://localhost:5010/peliculas';
        axios.get(URL)
             .then((res)=>{
                this.setState({
                    peliculas: res.data
                })
             }).catch((err)=>console.log(err));
    }

    //Funcion para asignar peliculaActual - tipo clase - Metodo
    actualizarPelicula(pelicula){
        this.setState({
            peliculaActual: pelicula
        })
    }
    render(){
        return (
            <div>
              <div className="row">    
                    <nav className="teal">
                        <div className="nav-wrapper blue darken-4 nav-films">
                        <a href="/" className="brand-logo logo2">PELICULAS</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="/">Inicio</a></li>
                        </ul>
                        </div>
                    </nav>
              </div>
              <div className="row">
                  <div className="col s12 m4">
                      <PeliculasLista 
                            listaPeliculas={this.state.peliculas}
                            actualizarPelicula={this.actualizarPelicula} />
                  </div>
                  <div className="col s12 m8">
                    <PeliculasDetalle peliculaDetalle={this.state.peliculaActual} />
                  </div>
              </div>
              <PeliculasForm />
            </div>
        );
    }       
 
}

export default App;
