import React from 'react'
import './drawerToggleButton.css'
import 'materialize-css/dist/css/materialize.min.css';



//import M from 'materialize-css/dist/js/materialize.min.js';

const drawerToggleButton= props =>(
    <button className="toggle_button light-blue darken-4" onClick={props.click}>
        <a className="waves-effect waves-white btn-flat">
           <i className="material-icons white-text">menu</i>
        </a>
    </button>
)

export default drawerToggleButton;