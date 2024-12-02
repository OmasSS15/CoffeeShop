import axios from 'axios'

import { useState, useEffect } from 'react'

import { useNavigate} from 'react-router-dom'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleXmark} from '@fortawesome/free-solid-svg-icons';

const URI = 'http://localhost:8000/productos/'

const CompCreateProductos = () => {
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [precio, setPrecio] = useState('')
    const [proveedor, setProveedor] = useState('')
    const [categoria, setCategoria] = useState('')
    const [estado, setEstado] = useState('Disponible')
    const navigate = useNavigate()

    // Procedimiento de Guardar
    const store = async (e) => {
        e.preventDefault()
        // Esto nos permitira conectar con el Backend
        await axios.post(URI, {
            nombre: nombre, 
            descripcion: descripcion,
            precio: precio,
            proveedor: proveedor,
            categoria: categoria,
            estado: estado
        } )
        navigate('/Producto')
    }

    // Cancelar y limpiar el formulario
    const handleCancel = () => {
      navigate('/Producto')
    };


    return (
        <div style={styles.container}>
            <h1>Formulario de Productos</h1>
            <form onSubmit={store}>
                <label style={styles.label}>
                    Producto:
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
                    Descripción:
                    <textarea 
                        name="descripcion"
                        rows="5" 
                        cols="50"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        style={{ ...styles.input, ...styles.textarea }}
                        maxLength="255" // Límite de caracteres
                        required
                    />
                    {/* <input
                        type="text"
                        name="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                        style={styles.input}
                        required
                    /> */}
                </label>
                <label style={styles.label}>
                    Precio:
                    <input
                        type="number"
                        step="0.01" 
                        min="0"
                        name="precio"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        style={styles.input}
                        required
                    />
                </label>
                <label style={styles.label}>
                  Proveedor:
                  <input
                        type="text"
                        name="proveedor"
                        value={proveedor}
                        onChange={(e) => setProveedor(e.target.value)}
                        style={styles.input}
                        required
                  />
                </label>
                <label style={styles.label}>
                  Categoría:
                  <input
                        type="text"
                        name="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        style={styles.input}
                        required
                  />
                </label>
                <label style={styles.label}>
                  Estado:
                  <select
                    name="estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    style={styles.input}
                    required
                  >
                    <option>Disponible</option>
                    <option>Agotado</option>
                  </select>
                  {/* <input
                        type="text"
                        name="estado"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                        style={styles.input}
                        required
                  /> */}
                </label>
                <div style={styles.buttonContainer}>
                    <button type="submit" style={styles.button}>
                      <FontAwesomeIcon icon={faCirclePlus} />&nbsp;Añadir
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
    textarea: {
      resize: 'none' /* Desactiva el redimensionamiento */
    }
  };
  

export default CompCreateProductos