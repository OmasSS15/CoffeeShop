import axios from 'axios'

import { useState, useEffect } from 'react'

import { useNavigate, useParams} from 'react-router-dom'

const URI = 'http://localhost:8000/proveedores/'

import React from 'react'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faCircleXmark} from '@fortawesome/free-solid-svg-icons';

const CompEditProveedor = () => {

    const [nombre, setNombre] = useState('')
    const [contacto, setContacto] = useState('')
    const [produc_sumin, setProducSumin] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    
    // Procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
          nombre: nombre, 
          contacto: contacto,
          produc_sumin: produc_sumin,
        } )
        navigate('/Proveedor')
    }

    useEffect( ()=>{
        getProveedorById()
    },[])

    const getProveedorById = async ()=> {
        const res = await axios.get(URI+id)
        setNombre(res.data.nombre)
        setContacto(res.data.contacto)
        setProducSumin(res.data.produc_sumin)
    }

    // Cancelar y limpiar el formulario
    const handleCancel = () => {
      navigate('/Proveedor')
    };

    return (
        <div style={styles.container}>
            <h1>Formulario de Proveedor</h1>
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
                    Contacto:
                    <input
                        type="text"
                        name="contacto"
                        value={contacto}
                        onChange={(e) => setContacto(e.target.value)}
                        style={styles.input}
                        required
                    />
                </label>
                <label style={styles.label}>
                    Productos Suministrados:
                    <input
                        type="text"
                        name="produc_sumin"
                        value={produc_sumin}
                        onChange={(e) => setProducSumin(e.target.value)}
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
    marginTop: '10%',
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
    flex: 5, // Para que los botones tengan el mismo ancho
    margin: '0 20px', // Separación entre botones
  },
};

export default CompEditProveedor
