import React from 'react'
import { Container } from '@material-ui/core'

class FormPet extends React.Component {
    render() {
        return (
            <Container>
<form>
  <div class="form-row">
    <div class="form-group col-md-4">
      <label for="inputEmail4">Nombre de la mascota</label>
      <input type="email" class="form-control" id="inputEmail4"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputPassword4">Collar/etiqueta</label>
      <input type="password" class="form-control" id="inputPassword4"/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-4">
        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
    </div>
    <div class="form-group col-md-4">
        <label for="inputAddress2">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-1">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    </div>
  <div class="form-group">
    <label for="exampleFormControlFile1">Cargar imagen</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
</form>

</Container>

        )
    }
}
export default FormPet