import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../../schemas/artistRegister"

const onSubmit = () => {
    console.log("Submitted");
}

const ArtistForm = () => {
    const { values,
            errors,
            handleBlur,
            handleChange,
            handleSubmit } = useFormik({
        initialValues: {
            name: "",
            surname: "",
            artisticName: "",
            email: "",
            password: "",
            confirmPassword: "",
            genre: [],
            description: "",
            instagram: "",
            twitter: "",
            spotify: "",
            phoneNumber: "",
            profileImg: "",
            agreeTerms: false
        },
        validationSchema: basicSchema,
        onSubmit,
    })

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <div>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Your name here..."
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400": null}
                />
            </div>
            <div>
                <label htmlFor="surname">Surname</label>
                <input
                    id="surname"
                    type="text"
                    placeholder="Your surname here..."
                    value={values.surname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div>
                <label htmlFor="artisticName">Artistic Name</label>
                <input
                    id="artisticName"
                    type="text"
                    placeholder="Artistic name"
                    value={values.artisticName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="youremail@example.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="********"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    id="confirmPassword"
                    type="password"
                    placeholder="********"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input
                    id="description"
                    type="textarea"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div>
                <label htmlFor="genre">Genre</label>
            </div>
            <div>
                <p>Your Media</p>
                <div>
                    <label htmlFor="instagram">Instagram</label>
                    <input
                        id="instagram"
                        type="url"
                        value={values.instagram}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div>
                    <label htmlFor="twitter">Twitter</label>
                    <input
                        id="twitter"
                        type="url"
                        value={values.twitter}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                <div>
                    <label htmlFor="spotify">Spotify</label>
                    <input
                        id="spotify"
                        type="url"
                        value={values.spotify}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="profileImg">Profile Image</label>
                <input
                    id="profileImg"
                    type="file"
                    value={values.profileImg}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    id="phoneNumber"
                    type="text"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div>
                <label htmlFor="agreeTerms">Terms & Conditions</label>
                <input
                    id="agreeTerms"
                    type="checkbox"
                    value={values.agreeTerms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <div>
                <button type="submit">
                    Submit
                </button>
            </div>
        </form>
    )
};

export default ArtistForm;