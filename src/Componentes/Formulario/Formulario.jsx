import React, { useState } from "react";
import Styles from "./Formulario.module.css"

const Formulario = (props) => {
    const { usuarios, setUsuarios } = props;
    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const desplegarUsuario = (event) => {
        const { name, value } = event.target;
        setUsuarios({
            ...usuarios,
            [name]: value
        });
        if (name === "firstName" && value.length <= 2) {
            setError({
                ...error,
                firstName: "First Name must be at least 2 characters"
            });
        } else if (name === "firstName") {
            setError({
                ...error,
                firstName: ""
            });
        }

        if (name === "lastName" && value.length <= 2) {
            setError({
                ...error,
                lastName: "Last Name must be at least 2 characters"
            });
        } else if (name === "lastName") {
            setError({
                ...error,
                lastName: ""
            });
        }

        if (name === "email" && value.length <= 5) {
            setError({
                ...error,
                email: "Email must be at least 5 characters"
            });
        } else if (name === "email") {
            setError({
                ...error,
                email: ""
            });
        }

        if (name === "password" && value.length < 8) { 
            setError({
               ...error,
                password: "Password must be at least 8 characters"
            });
        } else if (name === "password") {
            setError({
                ...error,
                password: ""
            });
        }

        if (name === "confirmPassword" && value !== usuarios.password) {
            setError({
               ...error,
                confirmPassword: "Password must match"
            });
            
        } else if (name === "confirmPassword") {
            setError({
                ...error,
                confirmPassword: ""
            });
        }
    };

    return(
            <form>
                <div>
                    <label htmlFor="firstName"> First Name: </label>
                    <input type="text"
                           id="firstName"
                           name="firstName"
                           onChange={desplegarUsuario} />
                    {error.firstName && <p className={Styles.error}>{error.firstName}</p>}
                </div>
                <div>
                    <label htmlFor="lastName"> Last Name: </label>
                    <input type="text" 
                           id="lastName"
                           name="lastName"
                           onChange={desplegarUsuario} />
                    {error.lastName && <p className={Styles.error}>{error.lastName}</p>}
                </div>
                <div>
                    <label htmlFor="email"> Email: </label>
                    <input type="text"
                           id="email"
                           name="email"
                           onChange={desplegarUsuario} />
                    {error.email && <p className={Styles.error}>{error.email}</p>}
                </div>
                <div>
                    <label htmlFor="password"> Password: </label>
                    <input type="password"
                           id="password"
                           name="password"
                           onChange={desplegarUsuario} />
                    {error.password && <p className={Styles.error}>{error.password}</p>}
                </div>
                <div>
                    <label htmlFor="confirmPassword"> Confirm Password: </label>
                    <input type="password"
                           id="confirmPassword"
                           name="confirmPassword"
                           onChange={desplegarUsuario} />
                    {error.confirmPassword && <p className={Styles.error}>{error.confirmPassword}</p>}
                </div>
            </form>
    )
}

export default Formulario;