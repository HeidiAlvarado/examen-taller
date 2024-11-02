import React from 'react';
import './App.css';


function App() {
  return (
    <div style={{ backgroundColor: '#fefeff', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: '#b5ead7', padding: '20px', borderRadius: '8px', width: '400px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
        <header style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0 }}>TECNOMARKK</h2>
          <p style={{ color: '#666' }}>Obtén tu cotización personalizada en segundos.</p>
        </header>
        <form>
          <section style={{ marginBottom: '15px' }}>
            <h3 style={{ fontSize: '16px', color: '#333', borderBottom: '1px solid #e0e0e0', paddingBottom: '5px' }}>Información de contacto</h3>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <input type="text" placeholder="Nombre" style={inputStyle} />
              <input type="email" placeholder="Correo" style={inputStyle} />
            </div>
          </section>
          <section style={{ marginBottom: '15px' }}>
            <h3 style={{ fontSize: '16px', color: '#333', borderBottom: '1px solid #e0e0e0', paddingBottom: '5px' }}>Información adicional</h3>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <input type="number" placeholder="Cantidad de productos" style={inputStyle} />
              <select style={inputStyle}>
                <option>Seleccionar</option>
                <option>Envío normal</option>
                <option>Envío express</option>
              </select>
            </div>
          </section>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '15px' }}>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" style={{ color: '#666', fontSize: '14px' }}>Acepto los términos y condiciones</label>
          </div>
          <button type="submit" style={buttonStyle}>Enviar</button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '4px'
};

const buttonStyle = {
  marginTop: '20px',
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default App;
