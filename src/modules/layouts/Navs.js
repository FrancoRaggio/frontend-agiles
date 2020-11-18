
import React from 'react'
import { Link, useHistory } from "react-router-dom";
import data from '../../data.json'
import Fuse from 'fuse.js'

const Navs = ({ setPosts, posts }) => {

  function handleOnSearch(e) {

    let wordSearch = e.target.value

    if (wordSearch === '') {
      return setPosts(data);
    }

    const fuse = new Fuse(posts, {
      keys: [
        "title",
        "race"
      ],
      includeScore: true
    })
    let postsResult = []

    const results = fuse.search(wordSearch);
    for (let i = 0; i < results.length; i++) {
      postsResult.push(results[i].item)
    }

    setPosts(postsResult);
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link class="navbar-brand" to={"/"}>Inicio</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to={"/advert"}>Anuncios <span class="sr-only">(current)</span></Link>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Publicaciones
        </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to={"/add-pet"}>Publicar Mascota</Link>
            </div>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to={"/about"}>SobreNosotros</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to={"/profile"}>Mi perfil <span class="sr-only">(current)</span></Link>
          </li>
          {/*  <li class="nav-item active">
            <Link class="nav-link" to={"/login"}>Iniciar Sesion</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" to={"/login"}>Cerrar Sesion</Link>
          </li> */}

        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" onChange={handleOnSearch} placeholder="Buscar..." aria-label="Buscar..." />
        </form>
      </div>
    </nav>

  )
}

export default Navs;
