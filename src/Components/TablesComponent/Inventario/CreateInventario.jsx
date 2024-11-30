import axios from 'axios'

import { useState, useEffect } from 'react'

import { useNavigate} from 'react-router-dom'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleXmark} from '@fortawesome/free-solid-svg-icons';

const URI = 'http://localhost:8000/inventario/'

const CompCreateInventario = () => {
  const [producto, setProducto] = useState('')
  const [stock_inicial, setStockInicial] = useState('')
  const [stock_actual, setStockActual] = useState('')
  const [umbral_reorden, setUmbralReorden] = useState('')
    const navigate = useNavigate()

    // Procedimiento de Guardar
    const store = async (e) => {
        e.preventDefault()
        // Esto nos permitira conectar con el Backend
        await axios.post(URI, {
          producto: producto, 
          stock_inicial: stock_inicial,
          stock_actual: stock_actual,
          umbral_reorden: umbral_reorden,
        } )
        navigate('/Inventario')
    }

    // Cancelar y limpiar el formulario
    const handleCancel = () => {
      navigate('/Inventario')
    };


    return (
        <div style={styles.container}>
            <h1>Formulario de Inventario</h1>
            <form onSubmit={store}>
                <label style={styles.label}>
                    Producto:
                    <input
                        type="text"
                        name="producto"
                        value={producto}
                        // Se captura el valor que va a guardarse
                        onChange={(e) => setProducto(e.target.value)}
                        style={styles.input}
                        required
                    />
                </label>
                <label style={styles.label}>
                    Stock Inicial:
                    <input
                         type="number"
                         name="stock_inicial"
                         value={stock_inicial}
                         onChange={(e) => setStockInicial(e.target.value)}
                         style={styles.input}
                         required
                    />
                </label>
                <label style={styles.label}>
                    Stock Actual:
                    <input
                        type="number"
                        name="stock_actual"
                        value={stock_actual}
                        onChange={(e) => setStockActual(e.target.value)}
                        style={styles.input}
                        required
                    />
                </label>
                <label style={styles.label}>
                  Umbral Reorden:
                  <input
                         type="number"
                         name="umbral_reorden"
                         value={umbral_reorden}
                         onChange={(e) => setUmbralReorden(e.target.value)}
                         style={styles.input}
                         required
                  />
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
  };
  

export default CompCreateInventario