import axios from 'axios'

import { useState, useEffect } from 'react'

import { useNavigate, useParams} from 'react-router-dom'

const URI = 'http://localhost:8000/empleados/'

import React from 'react'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faCircleXmark} from '@fortawesome/free-solid-svg-icons';

const CompEditEmpleado = () => {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [puesto, setPuesto] = useState('')
    const [salario, setSalario] = useState('')
    const [fecha_contratacion, setFechaContratacion] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    
    // Procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            nombre: nombre, 
            apellido: apellido,
            puesto: puesto,
            salario: salario,
            fecha_contratacion: fecha_contratacion
        } )
        navigate('/Empleado')
    }

    useEffect( ()=>{
        getEmpleadoById()
    },[])

    const getEmpleadoById = async ()=> {
        const res = await axios.get(URI+id)
        setNombre(res.data.nombre)
        setApellido(res.data.apellido)
        setPuesto(res.data.puesto)
        setSalario(res.data.salario)
        setFechaContratacion(res.data.fecha_contratacion)
    }

    // Cancelar y limpiar el formulario
    const handleCancel = () => {
      navigate('/Empleado')
    };

    return (
        <div style={styles.container}>
            <h1>Formulario de Empleado</h1>
            <form onSubmit={update}>
                <label style={styles.label}>
                    Nombre:
                    <input
                        type="text"
                        name="nombre"
                        value={nombre}
                        // Se captura el valor que va a guardarse
                        onChange={(e) => setNombre(e.target.value)}
                        style={styles.input}
                        required
                    />
                </label>
                <label style={styles.label}>
                    Apellido:
                    <input
                        type="text"
                        name="apellido"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        style={styles.input}
                        required
                    />
                </label>
                <label style={styles.label}>
                    Puesto:
                    <input
                        type="text"
                        name="puesto"
                        value={puesto}
                        onChange={(e) => setPuesto(e.target.value)}
                        style={styles.input}
                        required
                    />
                </label>
                <label style={styles.label}>
                  Salario:
                  <input
                        type="number"
                        step="0.01" 
                        min="0"
                        name="salario"
                        value={salario}
                        onChange={(e) => setSalario(e.target.value)}
                        style={styles.input}
                        required
                  />
                </label>
                <label style={styles.label}>
                  Fecha de Contratación:
                  <input
                        type="date"
                        name="fecha_contratacion"
                        value={fecha_contratacion}
                        onChange={(e) => setFechaContratacion(e.target.value)}
                        style={styles.input}
                        required
                  />
                </label>
                <div style={styles.buttonContainer}>
                    <button type="submit" style={styles.button}>
                      <FontAwesomeIcon icon={faPenToSquare} />&nbsp;Modificar
                    </button>
                    <button
                        type="button"
                        onClick={handleCancel}
                        style={styles.button}
                    >
                      <FontAwesomeIcon icon={faCircleXmark} />&nbsp;Cancelar
                    </button>
        </div>
      </form>
    </div>
    )
}

const styles = {
    container: {
      padding: '20px',
      maxWidth: '400px',
      margin: 'auto',
      backgroundColor: '#d0b39a',
      borderRadius: '10px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    label: {
      display: 'block',
      margin: '10px 0',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '8px',
      margin: '5px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    button: {
      backgroundColor: '#c5537c',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },

}

export default CompEditEmpleado
