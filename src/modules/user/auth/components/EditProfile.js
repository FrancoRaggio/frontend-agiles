import React from 'react'

class EditProfile extends React.Component {
    render() {
        return (
           
<form>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputEmail4">Nombres</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Ingrese su nombre"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputPassword4">Apellidos</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Ingrese su apellido"/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-8">
        <label for="inputAddress">Domicilio</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="08860 Castelldefels, Barcelona, España"/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputCity">Telefono</label>
      <input type="number" class="form-control" id="inputCity" placeholder="Ingrese su telefono"/>
    </div>
    <div class="form-group col-md-8">
      <label for="inputZip">Correo</label>
      <input type="email" class="form-control" id="inputZip"placeholder="Ingrese su correo"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputZip" >Edad</label>
      <input type="number" class="form-control" id="inputZip" placeholder="Ingrese su edad"/>
    </div>
  </div>
  <div class="form-group">
    </div>
  <div class="form-group">
    <label for="exampleFormControlFile1">Cargar imagen</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
</form>



        )
    }
}

export default EditProfile;