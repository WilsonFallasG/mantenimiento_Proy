'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import exportador from '../../firebase/addData';
import '../../globals.css';

const Page = ({ params }) => {
  const [fechaEntrada, setFechaEntrada] = useState('');
  const [fechaSalida, setFechaSalida] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipoMantenimiento, setTipoMantenimiento] = useState('');
  const placa = params.id.split('.')[0];
  const numeroMantenimientos = params.id.split('.')[1];
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar las acciones necesarias con los datos del formulario
    console.log('Fecha de entrada:', fechaEntrada);
    console.log('Fecha de salida:', fechaSalida);
    console.log('Descripción:', descripcion);
    console.log('Tipo de mantenimiento:', tipoMantenimiento);
  };

  const handleAddMantenimiento = async (e) => {
    e.preventDefault();
    const { result, error } = await exportador('Reparacion', params.id, {
      Descripcion: descripcion,
      FechaEntrada: fechaEntrada,
      FechaSalida: fechaSalida,
      TipoMantenimiento: tipoMantenimiento,
    });
    router.back();
  };

  const handleVolver = () => {
    router.back();
  };

  const handleCancelar = () => {
    router.back();
  };

  return (
    <div className='container'>
      <h1>Agregar mantenimiento a: {placa}</h1>
      <form onSubmit={handleAddMantenimiento} className="form">
        <div className='formGroup'>
          <label className="label" htmlFor="fechaEntrada">Fecha de entrada:</label>
          <input
            type="date"
            id="fechaEntrada"
            value={fechaEntrada}
            onChange={(e) => setFechaEntrada(e.target.value)}
          />
        </div>
        <div className='formGroup'>
          <label className="label"htmlFor="fechaSalida">Fecha de salida:</label>
          <input
            type="date"
            id="fechaSalida"
            value={fechaSalida}
            onChange={(e) => setFechaSalida(e.target.value)}
          />
        </div>
        <div className='formGroup'>
          <label className="label" htmlFor="descripcion">Descripción:</label>
          <input className='text'
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></input>
        </div>
        <div className='formGroup'>
          <label className="label" htmlFor="tipoMantenimiento">Tipo de mantenimiento:</label>
          <select
            id="tipoMantenimiento"
            value={tipoMantenimiento}
            onChange={(e) => setTipoMantenimiento(e.target.value)}
          >
            <option value="">Seleccione...</option>
            <option value="correctivo">Correctivo</option>
            <option value="preventivo">Preventivo</option>
          </select>
        </div>
        <div className='buttonGroup'>
          <button className='button2' type="submit">Guardar</button>
          <button className='button2' type="button" onClick={handleCancelar}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default Page;
