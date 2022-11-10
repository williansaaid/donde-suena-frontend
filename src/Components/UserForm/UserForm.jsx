import React from "react";
// import { useState } from "react";
// import "./UserForm.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserForm = () => {
	// const [startDate, setStartDate] = useState(new Date());
	return (
		<div className='container'>
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
					terms: "",
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
					birthday: Yup.number()
						.required("Fecha de nacimiento requerida")
						.positive("debe ser un numero positivo")
						.integer("debe ser un numero entero"),
					acceptedTerms: Yup.boolean()
						.required("Required")
						.oneOf([true], "You must accept the terms and conditions."),
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						// alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}>
				{({ isSubmitting }) => (
					<Form>
						<Field type='text' name='firstName' placeholder='Nombres *' />
						<ErrorMessage name='firstName' component='div' />

						<Field type='text' name='lastName' placeholder='Apellido *' />
						<ErrorMessage name='lastName' component='div' />

						<Field type='email' name='email' placeholder='Email *' />
						<ErrorMessage name='email' component='div' />

						<Field type='text' name='dni' />
						<ErrorMessage
							name='dni'
							component='div'
							placeholder='Número de documento *'
						/>

						<Field type='password' name='password' placeholder='Clave *' />
						<ErrorMessage name='password' component='div' />

						<Field
							type='password'
							name='password2'
							placeholder='Confirmar Clave *'
						/>
						<ErrorMessage name='password2' component='div' />

						<Field type='text' name='phone' placeholder='Teléfono *' />
						<ErrorMessage name='phone' component='div' />

						<Field
							type='date'
							name='birthday'
							placeholder='Fecha de nacimiento *'
						/>
						<ErrorMessage name='birthday' component='div' />

						<label htmlFor='terms'>
							<hr></hr>Terminos y condiciones.
						</label>
						<Field type='checkbox' name='acceptedTerms' />
						<ErrorMessage name='acceptedTerms' component='div' />

						<button type='submit' disabled={isSubmitting}>
							Enviar
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default UserForm;
