import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
const NotFoundPage= () => {
      useEffect(() => {
      let parallel = document.querySelector('.parallax');
      M.Parallax.init(parallel, {});
  
    }, [])
    return (
      <div className="parallax-container hello">
        <div className="parallax"><img style={{"height": "100%", "width": "100%"}} className="responsive-img" src={"https://cdn.dribbble.com/users/2446071/screenshots/6903453/404.gif"} /></div>
        <a className="waves-effect waves-light btn"><i className="material-icons left">arrow_back</i>Back</a>
      </div>
    );
}
export default NotFoundPage;