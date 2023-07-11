'use client'
import { useState } from 'react';
import exportador from '../firebase/addData';
import '../../app/globals.css'; 

const Page = () => {
  const [formValues, setFormValues] = useState({
    anio: '',
    modelo: '',
    NMotor: '',
    pasajeros: '',
    placa: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { result, error } = await exportador('Unidad', formValues.placa, {
      anio: formValues.anio,
      modelo: formValues.modelo,
      NMotor: formValues.NMotor,
      pasajeros: formValues.pasajeros,
    });

    if (error) {
      console.error(error);
    } else {
      console.log(result);
      setFormValues({
        anio: '',
        modelo: '',
        NMotor: '',
        pasajeros: '',
        placa: '',
      });
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Registrar Unidades</h1>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label className="label">Año:</label>
            <input
              type="text"
              name="anio"
              value={formValues.anio}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div>
            <label className="label">Modelo:</label>
            <input
              type="text"
              name="modelo"
              value={formValues.modelo}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div>
            <label className="label">Núm Motor:</label>
            <input
              type="text"
              name="NMotor"
              value={formValues.NMotor}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div>
            <label className="label">Pasajeros:</label>
            <input
              type="text"
              name="pasajeros"
              value={formValues.pasajeros}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div>
            <label className="label">Placa:</label>
            <input
              type="text"
              name="placa"
              value={formValues.placa}
              onChange={handleChange}
              className="input"
            />
          </div>
          <button type="submit" className="button1">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default Page;

