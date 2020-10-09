import React from 'react'

class Buscador extends React.Component {
    render() {
        return (
            <form>
                <div className="row">
                    <div className="form-group col-md-4">
                        <input type="text" class="form-control-lg" placeholder="Busca tu Mascota." />
                    </div>
                    <div className="form-group col-md-2">
                        <input type="submit" class="btn btn-lg btn-danger btn-block" value="Buscar..." />
                    </div>
                </div>
            </form>
        )
    }
}
export default Buscador;
