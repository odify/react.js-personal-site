import React from "react";
import { Link } from 'react-router-dom';
import './icon.css';




class Icon extends Component {
    render() {
        return (
            <div>
                <Link className='link-i' onClick={changeLink} to={link} >
                <button className='btn'> X </button>
                </Link>
            </div>
        );
    }
}

export default Icon;