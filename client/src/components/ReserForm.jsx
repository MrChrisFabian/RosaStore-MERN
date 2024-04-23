import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import ModalCustom from './ModalCustom'
import moment from 'moment'


const ReserForm = () => {
    const [services, setServices] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [serviceSelected, setServiceSelected] = useState(0)
    const [good, setGood] = useState(false)

    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        service: Yup.string().required('Por favor selecciona'),
        day: Yup.date().required('Este campo es requerido')
            .min(new Date(new Date().getTime() - 24 * 60 * 60 * 1000), 'La fecha debe ser hoy o en el futuro')
            .max(new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000), 'Por favor selecciona una fecha dentro de los próximos 30 días'),
        hour: Yup.string().required('Este campo es requerido').test('is-correct-time', 'Debes seleccionar entre las 09:00hs y 17:00hs', (value) => {
            const time = value.split(':');
            const hours = parseInt(time[0]);
            return hours >= 9 && hours <= 18;
        }),
    });

    // add reservation to the database
    const addReservation = async (values, setErrors) => {
        try {
            // Hacemos estas cargas de datos antes de enviar para evitar problemas de asignación antes de tiempo
            values.service = JSON.parse(values.service).titulo
            values.cost = serviceSelected
            values.day = moment(values.day).format('DD-MM-YYYY')
            console.log(values.day)
            await axios.post(
                'http://localhost:8000/api/reserva/', values, { withCredentials: true }
            );
            // navigate('/');
        }
        catch (error) {
            console.log('Error: ', error)
            setErrors({ general: error })
        }
    }
    // handle submit

    const handleSubmit = (values, { setSubmitting, resetForm, setErrors }) => {
        addReservation(values, setErrors)
        setGood(true)
        setSubmitting(false)
        resetForm()
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/service', { withCredentials: true })
            .then((response) => {
                setServices(response.data.Service)
                setIsLoading(false)
            })
            .catch((error) => {
                alert(error)
                setIsLoading(false)
            })
    }, [])
    if (isLoading) {
        return <>
            <div className="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800" role="alert">
                <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium">Info alert!</span> Is Loading...
                </div>
            </div></>
    }
    return (
        <>

            <Formik initialValues={{
                service: '',
                day: '',
                hour: '',
                cost: serviceSelected,
                user: `${JSON.parse(localStorage.getItem('user'))._id}`
            }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>
                {({ errors, isSubmitting, handleChange }) => (
                    <Form className='m-2 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 '>
                        <h2>Reservar</h2>
                        <hr className='mt-2' />
                        {
                            errors?.general && (
                                <div className="mt-2 text-sm text-red-600 dark:text-red-500" role="alert">
                                    {errors.general}
                                </div>
                            )
                        }
                        {/* Field para seleccionar un servicio que se nutre de la basedata */}
                        <div className='flex flex-col'>
                            <label htmlFor='service'>Selecciona un Servicio</label>
                            <Field as='select' name='service' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                                onChange={(e) => {
                                    handleChange(e)
                                    setServiceSelected(JSON.parse(e.target.value).cost)
                                }}
                            >
                                <option value=''>Selecciona un servicio</option>
                                {
                                    services && services.map((service) => (
                                        <option key={service._id} value={JSON.stringify({ cost: service.cost, titulo: service.titulo })}>{service.titulo}</option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage name='service' component='div' className='mt-2 text-sm text-red-600 dark:text-red-500' />
                        </div>
                        {/* Field para seleccionar el día */}
                        <div>
                            <label htmlFor='day'>Selecciona un dia</label>
                            <Field type='date' name='day' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                            <ErrorMessage name='day' component='div' className='mt-2 text-sm text-red-600 dark:text-red-500' />
                        </div>
                        {/* Field para seleccionar la hora */}
                        <div>
                            <label htmlFor='hour'>Selecciona una hora</label>
                            <Field type='time' name='hour' min='09:00' max='18:00' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                            <ErrorMessage name='hour' component='div' className='mt-2 text-sm text-red-600 dark:text-red-500' />
                        </div>
                        {/* Show the cost of the service selected */}
                        <div>
                            <p className='mt-2'>Costo: {Number(serviceSelected).toLocaleString()} gs</p>
                        </div>
                        {/* Button for the submit */}
                        <button disabled={isSubmitting} type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Reservar!
                            </span>
                        </button>
                    </Form>
                )}
            </Formik>
            <ModalCustom handler={good} type={'create'} functionality={() => navigate('/')} />
        </>

    )
}

export default ReserForm