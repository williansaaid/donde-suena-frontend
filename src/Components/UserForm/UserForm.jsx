import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { submitUserForm } from "../../Redux/eventActions";
import * as Yup from "yup";

const UserForm = () => {
	const dispatch = useDispatch();
	return (
		<div className='h-full w-full flex flex-col items-center justify-center bg-customBlack font-source-sans'>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					dni: "",
					password: "",
					password2: "",
					phone: "",
					birthday: "",
					acceptedTerms: "",
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, "El nombre debe tener menos de 15 caracteres")
						.required("Nombre requerido"),
					lastName: Yup.string()
						.max(20, "El apellido debe tener menos de 20 caracteres")
						.required("Apellido requerido"),
					email: Yup.string()
						.email("Direccion de mail invalida")
						.required("Direccion de mail requerida"),
					password: Yup.string()
						.min(6, "La contraseña debe contener al menos 6 caracteres")
						.required("Contraseña requerida"),
					dni: Yup.number()
						.typeError("Debe ser un numero de telefono valido")
						.min(9, "Numero de documento invalido")
						.required("Numero de documento requerido"),
					password2: Yup.string().oneOf(
						[Yup.ref("password"), null],
						"Las contraseñas deben coincidir"
					),
					phone: Yup.number()
						.typeError("Debe ser un numero de telefono valido")
						.positive("Debe ser un numero positivo")
						.integer("Debe ser un numero entero")
						.min(8)
						.required("Nunero de telefono requerido"),
					birthday: Yup.string()
						.typeError("Debe ser una fecha de telefono valida")

						.required("Fecha de nacimiento requerida"),
					acceptedTerms: Yup.boolean()
						.required("Required")
						.oneOf([true], "You must accept the terms and conditions."),
				})}
				onSubmit={(values, { setSubmitting }) => {
					dispatch(submitUserForm(values));
					setSubmitting(false);
				}}>
				{({ isSubmitting, errors }) => (
					<Form className='w-full max-w-2xl bg-customGray p-4 flex flex-col justify-center items-center gap-2 my-8 rounded'>
						<div className='flex flex-wrap -mx-3 w-full'>
							<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
								<label
									htmlFor='firstName'
									className='block tracking-wide text-white text-s font-bold mb-2'>
									Nombre
								</label>
								<Field
									type='text'
									name='firstName'
									placeholder='Nombre *'
									className={
										errors.firstName
											? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
											: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									}
								/>
								<ErrorMessage name='firstName' component='div' />
							</div>
							<div className='w-full md:w-1/2 px-3'>
								<label
									htmlFor='lastName'
									className='block tracking-wide text-white text-s font-bold mb-2'>
									Apellido
								</label>
								<Field
									type='text'
									name='lastName'
									placeholder='Apellido *'
									className={
										errors.lastName
											? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
											: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									}
								/>
								<ErrorMessage name='lastName' component='div' />
							</div>
						</div>
						<div className='px-3'>
							<label
								htmlFor='email'
								className='block tracking-wide text-white text-s font-bold mb-2'>
								Email
							</label>
							<Field
								type='email'
								name='email'
								placeholder='Email *'
								className={
									errors.email
										? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								}
							/>
							<ErrorMessage name='email' component='div' />
						</div>

						<div className='px-3'>
							<label
								htmlFor='dni'
								className='block tracking-wide text-white text-s font-bold mb-2'>
								Documento
							</label>
							<Field
								type='text'
								name='dni'
								placeholder='Número de documento *'
								className={
									errors.dni
										? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								}
							/>
							<ErrorMessage name='dni' component='div' />
						</div>
						<div className='flex flex-wrap w-full'>
							<div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
								<label
									htmlFor='password'
									className='block tracking-wide text-white text-s font-bold mb-2'>
									Contraseña
								</label>
								<Field
									type='password'
									name='password'
									placeholder='Clave *'
									className={
										errors.password
											? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
											: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									}
								/>
								<ErrorMessage name='password' component='div' />
							</div>
							<div className='w-full md:w-1/2 px-3'>
								<label
									htmlFor='password2'
									className='block tracking-wide text-white text-s font-bold mb-2'>
									Confirmar Contraseña
								</label>
								<Field
									type='password'
									name='password2'
									placeholder='Confirmar Clave *'
									className={
										errors.password2
											? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
											: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
									}
								/>
								<ErrorMessage name='password2' component='div' />
							</div>
						</div>
						<div className='px-3'>
							<label
								htmlFor='phone'
								className='block tracking-wide text-white text-s font-bold mb-2'>
								Número Telefónico
							</label>
							<Field
								type='text'
								name='phone'
								placeholder='Teléfono *'
								className={
									errors.phone
										? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								}
							/>
							<ErrorMessage name='phone' component='div' />
						</div>
						<div className='px-3'>
							<label
								htmlFor='name'
								className='block tracking-wide text-white text-s font-bold mb-2'>
								Fecha de nacimiento
							</label>
							<Field
								type='date'
								name='birthday'
								className={
									errors.password
										? "appearance-none block w-full bg-red-100 text-gray-700 border border-customRed rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
										: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								}
							/>
							<ErrorMessage name='birthday' component='div' />
						</div>
						<div className='flex flex-row-reverse items-center justify-center gap-2'>
							<label
								htmlFor='acceptedTerms'
								className='block tracking-wide text-white text-s font-bold'>
								Acepto los{" "}
								<a
									href='#'
									className='inline-block align-baseline font-bold text-m text-gray-400 hover:text-customRed'>
									Terminos y Condiciones
								</a>
							</label>

							<Field type='checkbox' name='acceptedTerms' />
							<ErrorMessage name='acceptedTerms' component='div' />
						</div>
						<div>
							<button
								type='submit'
								disabled={isSubmitting}
								className='bg-customRed hover:bg-customGray text-white font-bold py-2 px-4 rounded border-2 border-transparent focus:outline-none focus:shadow-outline hover:text-customRed hover:border-customRed'>
								Enviar
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default UserForm;
