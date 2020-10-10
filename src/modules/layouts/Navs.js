import React from 'react'
import { Link, useHistory } from "react-router-dom";

class Navs extends React.Component {



  render() {
    return (
      <nav class=" navbar navbar-expand-lg navbar-light bg-light">
        <link class="navbar-brand" to={"/home"}>Inicio</link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <link class="nav-link" to={"/advert"}>Anuncios <span class="sr-only">(current)</span></link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Publicaciones
        </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <link class="dropdown-item" to={"/add-pet"}>Publicar Mascota</link>
                <a class="dropdown-item" href="#">Comentarios</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Eliminar publicacion</a>
              </div>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={"/about"}>SobreNosotros</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" >Perfil</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navs;