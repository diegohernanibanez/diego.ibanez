import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
    return <Link to={props.url} >
        <img className={props.class} src={props.image} alt={props.altText} width="100"></img>
    </Link>
}

export default Button;

