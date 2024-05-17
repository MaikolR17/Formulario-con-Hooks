import React from "react";
import Styles from "./Formulario.module.css"

const Formulario = (props) => {
    const { usuarios, setUsuarios } = props;

    const desplegarUsuario = (event) => {
        setUsuarios({
            ...usuarios,
            [event.target.name]: event.target.value
        });
    };

    return(
            <form>
                <div>
                    <label htmlFor="firstName"> First Name: </label>
                    <input type="text"
                           id="firstName"
                           name="firstName"
                           onChange={desplegarUsuario} />
                </div>
                <div>
                    <label htmlFor="lastName"> Last Name: </label>
                    <input type="text" 
                           id="lastName"
                           name="lastName"
                           onChange={desplegarUsuario} />
                </div>
                <div>
                    <label htmlFor="email"> Email: </label>
                    <input type="text"
                           id="email"
                           name="email"
                           onChange={desplegarUsuario} />
                </div>
                <div>
                    <label htmlFor="password"> Password: </label>
                    <input type="password"
                           id="password"
                           name="password"
                           onChange={desplegarUsuario} />
                </div>
                <div>
                    <label htmlFor="confirmPassword"> Confirm Password: </label>
                    <input type="password"
                           id="confirmPassword"
                           name="confirmPassword"
                           onChange={desplegarUsuario} />
                </div>
            </form>
    )
}

export default Formulario;