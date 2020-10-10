import React from 'react'
import logoimg from '../../assets/logo/logo.png'
import { Link, useHistory } from "react-router-dom";

class Logo extends React.Component {
    render() {
        return (
            <div>
                <Link to={'/'}><img height="200" src={logoimg} /></Link>
            </div>
        )
    }
}
export default Logo