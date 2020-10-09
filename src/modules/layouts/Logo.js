import React from 'react'
import logoimg from '../../assets/logo/logo.png'

class Logo extends React.Component {
    render() {
        return (
            <div>
                <img height="200" src={logoimg} />
            </div>
        )
    }
}
export default Logo