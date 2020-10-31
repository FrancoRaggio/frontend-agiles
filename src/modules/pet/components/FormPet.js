import React from 'react'

const FormPet = (props) => {

  const customColumnStyle = { width: 200 }

  return (
    <form>
      <div class="form-row">
        <div class="form-group col-md-3">
          <label style={customColumnStyle} for="inputEmail5" ><strong>Nombre</strong></label>
          <input style={customColumnStyle} type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="form-group col-md-3">
          <label style={customColumnStyle} for="inputPassword4" ><strong>Collar/etiqueta</strong></label>
          <input style={customColumnStyle} type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="form-group col-md-3">
          <label style={customColumnStyle} for="inputState"><strong>Tipo de mascota</strong></label>
          <select style={customColumnStyle} id="inputState" class="form-control">
            <option selected>...</option>

            <option>Gato</option>
            <option>Perro</option>
            <option>Reptil</option>
            <option>Pajaro</option>
            <option>Caballo</option>
            <option>Huron</option>
            <option>Tortuga</option>
            <option>Roedor</option>
          </select>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-3">
          <label style={customColumnStyle} for="inputAddress" ><strong>Raza</strong></label>
          <input style={customColumnStyle} type="text" class="form-control" id="inputAddress" placeholder="..." />
        </div>
        <div class="form-group col-md-3">
          <label style={customColumnStyle} for="inputState"><strong>Color</strong></label>
          <select style={customColumnStyle} id="inputState" class="form-control">
            <option selected>...</option>
            <option>Negro</option>
            <option>Marron</option>
            <option>Blanco</option>
            <option>otro</option>
          </select>
        </div>

        <div class="form-group col-md-3">
          <label style={customColumnStyle} for="inputState"><strong>Tamaño</strong></label>
          <select style={customColumnStyle} id="inputState" class="form-control">
            <option selected>...</option>
            <option>Pequeño</option>
            <option>Mediano</option>
            <option>Grande</option>
          </select>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-3">
          <label style={customColumnStyle} for="inputCity"><strong>Años</strong></label>
          <input style={customColumnStyle} type="text" class="form-control" id="inputCity" />
        </div>
        <div class="form-group col-md-3">
          <label style={customColumnStyle} for="inputState"><strong>Unidad de edad</strong></label>
          <select style={customColumnStyle} id="inputState" class="form-control">
            <option selected>...</option>
            <option>años</option>
            <option>meses</option>
            <option>semanas</option>
            <option>dias</option>
          </select>
        </div>

        <div class="form-group col-md-3">
          <label style={customColumnStyle} for="inputState"><strong>Genero</strong></label>
          <select style={customColumnStyle} id="inputState" class="form-control">
            <option selected>...</option>
            <option>Macho</option>
            <option>Hembra</option>
            <option>Desconocido</option>
          </select>
        </div>

        <div class="form-group col-md-9">
          <label style={customColumnStyle} for="exampleFormControlTextarea1" class="form-row" class="col-md-4"> <strong>Descripcion</strong></label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
          <div class="form-group col-md-4" >
            <label style={customColumnStyle} for="exampleFormControlFile1"><strong>Cargar imagen</strong></label>
            <input style={customColumnStyle} type="file" class="form-control-file" id="exampleFormControlFile1" />
          </div>
        </div>

      </div>
      <div class="form-group col-md-9">
        <button type="button" class="btn btn-primary btn-sm">Cancelar</button>
        <button type="button" class="btn btn-secondary btn-sm">Publicar</button>
      </div>

    </form >


  )
}

export default FormPet;
