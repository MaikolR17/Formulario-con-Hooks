import React from "react";

const Usuarios = props => {
    const { firstName, lastName, email, password, confirmPassword } = props.nuevoUsuario;
    return (
        <>
            <h2> Your Form Data </h2>
            <p> First Name: {firstName} </p>
            <p> Last Name: {lastName} </p>
            <p> Email: {email} </p>
            <p> Password: {password} </p>
            <p> Confirm Password: {confirmPassword} </p>
        </>
    )
}

export default Usuarios;