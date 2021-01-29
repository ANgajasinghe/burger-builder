import React from 'react';

const navigationItem = ( props ) => (
    <li className="nav-item">
        <a 
            href={props.link} 
            className={props.active ? 'nav-link active' : 'nav-link'}>{props.children}</a>
    </li>
);

export default navigationItem;