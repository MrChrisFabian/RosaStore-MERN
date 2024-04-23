
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { set } from 'mongoose'
const ServiceForm = ({ formtype, id }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [initialValues, setInitialValues] = useState({
        titulo: '',
        cost: ''
    })
    useEffect(() => {
        axios.get(`http://localhost:8000/api/service/${id}`, { withCredentials: true })
            .then(res => {
                setInitialValues({
                    titulo: res.data.Service.titulo,
                    cost: res.data.Service.cost
                },
                    setIsLoading(false)
                )
            })
            .catch(err => console.log(err), setIsLoading(false)
            )
    }, [id])
    const navigate = useNavigate()
    const validationSchema = Yup.object().shape({
        titulo: Yup.string().required('El titulo es requerido'),
        cost: Yup.number()
            .min(0, 'El costo no puede ser negativo')
            .required('El costo es requerido')
    })
    // Create the service
    const createService = async (values, setErros) => {
        try {
            await axios.post(
                'http://localhost:8000/api/service/', values, { withCredentials: true },
                navigate('/servicios')
            )
        }
        catch (error) {
            setErros(error)
            console.log(error)
        }
    }
    // Update the service
    const updateService = async (values, setErros) => {
        try {
            await axios.put(
                `http://localhost:8000/api/service/${id}`, values, { withCredentials: true },
                navigate('/servicios')
            )
        }
        catch (error) {
            setErros(error)
            console.log(error)
        }
    }

    const handleSubmit = (values, { setSubmitting, resetForm, setErrors }) => {
        if (formtype == 'update') {
            updateService(values, setErrors)
            setSubmitting(false)
            resetForm()
        } else if (formtype == 'create') {
            createService(values, setErrors)
            setSubmitting(false)
            resetForm()
        }
    }

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
        <div>
            <Formik
                initialValues={{
                    titulo: initialValues.titulo || '',
                    cost: initialValues.cost || ''
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, isSubmitting }) => (
                    <Form className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 '>
                        <h2>{formtype === 'create' ? 'Crea un nuevo servicio!' : 'Modifica este servicio...'}</h2>
                        <hr />
                        {
                            errors?.general && (
                                <div className='mt-2 text-sm text-red-600 dark:text-red-500' role="alert">
                                    {errors.general}
                                </div>
                            )
                        }
                        <div className='mb-3'>
                            <label htmlFor='titulo'>Titulo</label>
                            <Field type='text' name='titulo' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder={initialValues.titulo}></Field>
                            <ErrorMessage name='titulo' component='div' className='mt-2 text-sm text-red-600 dark:text-red-500' />
                        </div><div className='mb-3'>
                            <label htmlFor='cost'>Costo</label>
                            <Field type='number' name='cost' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder={`${Number(initialValues.cost).toLocaleString()} gs`}></Field>
                            <ErrorMessage name='cost' component='div' className='mt-2 text-sm text-red-600 dark:text-red-500' />
                        </div>
                        <button disabled={isSubmitting} type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Enviar!
                            </span>
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}


export default ServiceForm