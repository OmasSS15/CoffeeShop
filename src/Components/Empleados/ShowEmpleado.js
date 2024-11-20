import axios from 'axios'

import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { getAllEmpleados, getEmpleado } from '../../../node/controllers/EmpleadoController'

const URI = 'http:://localhost:8000/empleados/'

const CompShowEmpleados = () => {
    const [empleados, setEmpleado] = useState([])
    useEffect( ()=>{
        getEmpleados()
    },[])

    // Procedimiento para mostrar todos los empleados
    const getEmpleados = async () => {
        const res = await axios.get(URI)
        setEmpleado(res.data)
    }

    // Procedimiento para eliminar un empleado
    const deleteEmpleados = async (id) => {
        axios.delete(`${URI}${id}`)
        getEmpleados()
    }

    return(
        <div></div>
    )
}



export default CompShowEmpleados