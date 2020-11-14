import React from 'react'
import { useSelector } from 'react-redux'

export const Prueba = () => {

    const state = useSelector( state => state.auth)
    const { email, password } = state 

    return (
        <div>
            <h1>Componente prueba</h1>
            <h2>El email es: </h2> {email}
            <h2>El password es: </h2> {password}
        </div>
    )
}
