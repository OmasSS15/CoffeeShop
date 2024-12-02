import axios from 'axios'

import { useState, useEffect } from 'react'

import { useNavigate, useParams} from 'react-router-dom'

const URI = 'http://localhost:8000/ventas/'

import React from 'react'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faCircleXmark} from '@fortawesome/free-solid-svg-icons';

const CompEditVenta = () => {

    const [fecha, setFecha] = useState('')
    const [empleado, setEmpleado] = useState('')
    const [producto, setProducto] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [total, setTotal] = useState('')
    const [metodo_pago, setMetPago] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()
    
    // Procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            fecha: fecha.split('T')[0],
            empleado: empleado,
            producto: producto,
            cantidad: cantidad,
            total: total,
            metodo_pago: metodo_pago,
        } )
        navigate('/Ventas')
    }

    useEffect( ()=>{
        getVentaById()
    },[])

    const getVentaById = async ()=> {
        const res = await axios.get(URI+id)
        setFecha(res.data.fecha)
        setEmpleado(res.data.empleado)
        setProducto(res.data.producto)
        setCantidad(res.data.cantidad)
        setTotal(res.data.total)
        setMetPago(res.data.metodo_pago)
    }

    // Cancelar y limpiar el formulario
    const handleCancel = () => {
      navigate('/Ventas')
    };

    return (
        <div style={styles.container}>
            <h1>Formulario de Venta</h1>
            <form onSubmit={update}>
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

export default CompEditVenta