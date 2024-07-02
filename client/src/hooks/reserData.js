import { useEffect, useState } from "react";
import axios from "axios";

const useReserData = (trigger) => {

    const [reservas, setReservas] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/reserva', { withCredentials: true })
            .then((response) => {
                setReservas(response.data.Reserva)
                setIsLoading(false)
            })
            .catch((error) => {
                alert(error)
                setIsLoading(false)
                setError(error)
            })
    }, [trigger]);
    return { reservas, isLoading, error };
};
export default useReserData;