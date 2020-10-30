import React from 'react'



class FormPet extends React.Component {
    render() {
        return (

<form>

  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputEmail5"><strong>Nombre</strong></label>
      <input type="email" class="form-control" id="inputEmail4"/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputPassword4"><strong>Collar/etiqueta</strong></label>
      <input type="password" class="form-control" id="inputPassword4"/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputState"><strong>Tipo de mascota</strong></label>
      <select id="inputState" class="form-control">
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
        <label for="inputAddress"><strong>Raza</strong></label>
        <input type="text" class="form-control" id="inputAddress" placeholder="..."/>
    </div>
  <div class="form-group col-md-3">
    <label for="inputState"><strong>Color</strong></label>
    <select id="inputState" class="form-control">
        <option selected>...</option>
        <option>Negro</option>
        <option>Marron</option>
        <option>Blanco</option>
        <option>Verde</option>
        <option>Azul</option>
        <option>rojo</option>
        <option>otro</option>
    </select>
  </div>
    
  <div class="form-group col-md-3">
      <label for="inputState"><strong>Tamaño</strong></label>
      <select id="inputState" class="form-control">
        <option selected>...</option>
        <option>Pequeña</option>
        <option>Mediana</option>
        <option>Grande</option>
        
      </select>
  </div>
   
  
  </div>
  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputCity"><strong>Años</strong></label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-3">
      <label for="inputState"><strong>Unidad de edad</strong></label>
      <select id="inputState" class="form-control">
        <option selected>...</option>
        <option>años</option>
        <option>meses</option>
        <option>semanas</option>
        <option>dias</option>
      </select>
    </div>
    <div class="form-group col-md-3">
      <label for="inputState"><strong>Genero</strong></label>
      <select id="inputState" class="form-control">
        <option selected>...</option>
        <option>Macho</option>
        <option>Hembra</option>
        <option>Desconocido</option>
        
      </select>
    </div>
  <div class="form-group col-md-9">

<label for="exampleFormControlTextarea1" class="form-row" class="col-md-4"> <strong>Descripcion</strong></label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
<div class="form-group col-md-3" >
<label for="exampleFormControlFile1" > <strong>Cargar imagen</strong></label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
    </div>
</div>

  </div>
  <div class="form-group col-md-9">
  
  <button type="button" class="btn btn-primary btn-sm">Cancelar</button>
<button type="button" class="btn btn-secondary btn-sm">Publicar</button>
</div>

</form>


        )
    }
}
export default FormPet