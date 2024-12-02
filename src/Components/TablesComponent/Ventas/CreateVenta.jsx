import axios from 'axios'

  import { useState, useEffect } from 'react'

  import { useNavigate} from 'react-router-dom'

  // Font Awesome
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCirclePlus, faCircleXmark} from '@fortawesome/free-solid-svg-icons';

  const URI = 'http://localhost:8000/ventas/'

  const CompCreateVenta = () => {
      const [fecha, setFecha] = useState('')
      const [empleado, setEmpleado] = useState('')
      const [producto, setProducto] = useState('')
      const [cantidad, setCantidad] = useState('')
      const [total, setTotal] = useState('')
      const [metodo_pago, setMetPago] = useState('')
      const navigate = useNavigate()

      // Procedimiento de Guardar
      const store = async (e) => {
          e.preventDefault()
          // Esto nos permitira conectar con el Backend
          await axios.post(URI, {
              fecha: fecha.split('T')[0],
              empleado: empleado,
              producto: producto,
              cantidad: cantidad,
              total: total,
              metodo_pago: metodo_pago,
          } )
          navigate('/Ventas')
      }

      // Cancelar y limpiar el formulario
      const handleCancel = () => {
        navigate('/Ventas')
      };


      return (
          <div style={styles.container}>
              <h1>Formulario de Ventas</h1>
              <form onSubmit={store}>
              <label style={styles.label}>
                    Fecha:
                    <input
                          type="date"
                          name="fecha"
                          value={fecha}
                          onChange={(e) => setFecha(e.target.value)}
                          style={styles.input}
                          required
                    />
                  </label>
                  <label style={styles.label}>
                     Empleado:
                      <input
                          type="text"
                          name="empleado"
                          value={empleado}
                          onChange={(e) => setEmpleado(e.target.value)}
                          style={styles.input}
                          required
                      />
                  </label>
                  <label style={styles.label}>
                     Producto:
                      <input
                          type="text"
                          name="producto"
                          value={producto}
                          onChange={(e) => setProducto(e.target.value)}
                          style={styles.input}
                          required
                      />
                  </label>
                  <label style={styles.label}>
                     Cantidad:
                      <input
                          type="text"
                          name="cantidad"
                          value={cantidad}
                          onChange={(e) => setCantidad(e.target.value)}
                          style={styles.input}
                          required
                      />
                  </label>
                  <label style={styles.label}>
                      Total:
                      <input
                          type="number"
                          name="total"
                          value={total}
                          onChange={(e) => setTotal(e.target.value)}
                          style={styles.input}
                          required
                      />
                  </label>
                  <label style={styles.label}>
                      Metodo de pago:
                      <input
                          type="text"
                          name="metodo_pago"
                          value={metodo_pago}
                          onChange={(e) => setMetPago(e.target.value)}
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
    

  export default CompCreateVenta