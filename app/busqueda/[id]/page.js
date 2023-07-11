'use client'
import { useState, useEffect } from 'react';
import '../../globals.css';

import getDocument from '../../firebase/getAllData'
import { useRouter } from 'next/navigation';

const Page = ({ params }) => {
    const [maintenanceList, setMaintenanceList] = useState([]);
    const router = useRouter();
    const [numeroMantenimientos, setNumeroMantenimientos] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { result, error } = await getDocument('Reparacion');
                if (error) {
                    console.error(error);

                } else {
                    const lista = [];
                    setNumeroMantenimientos(result.length);
                    result.forEach((valor) => {
                        if (valor.split('.')[0] == params.id) {
                            lista.push(valor);
                        }
                    });
                    setMaintenanceList(lista);

                }
            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);
    if (isLoading) {
        return <div>Cargando...</div>;
    }
    const handleViewMaintenance = (id) =>{
        console.log("viendo...", id);
    }
    const handleBack = () => {
        router.back();
    }
    // Función para eliminar un mantenimiento
    const handleDeleteMaintenance = (id) => {
        // Aquí puedes realizar la lógica para eliminar el mantenimiento con el ID proporcionado
        console.log(`Eliminar mantenimiento con ID: ${id}`);
    };
    const handleAddMantenimiento = () => {
        const id = [params.id];
        router.push(`/mantenimientos/${id}.${numeroMantenimientos}`);
    }

    return (
        <div className='container'>
            <h1>Mantenimientos {params.id}</h1>
            <button className='button2' onClick={handleBack}>
                Volver
            </button>
            <button className='button2' onClick={handleAddMantenimiento}>Agregar Mantenimiento</button>
            <ul>
                {maintenanceList.map((maintenance) => (
                    <li key={maintenance}>
                        <p>ID: {maintenance}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;
