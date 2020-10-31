import React from 'react'

class EditProfile extends React.Component {
    render() {
        return (
           
<form>
  <div >
    <div class="form-group col-md-10">
      <label for="inputEmail4">Nombres</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Ingrese su nombre"/>
    </div>
    <div class="form-group col-md-10">
      <label for="inputPassword4">Apellidos</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Ingrese su apellido"/>
    </div>
  </div>
  <div >
    <div class="form-group col-md-12">
        <label for="inputAddress">Domicilio</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="08860 Castelldefels, Barcelona, España"/>
    </div>
  </div>
  <div >
    <div class="form-group col-md-10">
      <label for="inputCity">Telefono</label>
      <input type="number" class="form-control" id="inputCity" placeholder="Ingrese su telefono"/>
    </div>
    <div class="form-group col-md-10">
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