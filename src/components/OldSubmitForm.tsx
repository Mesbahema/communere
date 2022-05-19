import { useFormik } from "formik"
import * as Yup from "yup"

const SubmitForm = () => {

    const formik = useFormik({
        initialValues: {
            location_name: '',
            location_type: ''
        },
        onSubmit: values => {
            console.log('submitted', values)
        },
        validationSchema : Yup.object({
            location_name: Yup.string().required('Location name is required'),
            location_type: Yup.string().required('Location type is required'),
        })
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label
                    htmlFor="location_name">Location name:</label>
                <input
                    type="text"
                    id="location_name"
                    name="location_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.location_name}
                />
                {(formik.errors.location_name && formik.touched?.location_name) ? <div>{formik.errors.location_name}</div> : null}
            </div>
            <div>
                <label htmlFor="location_type">Location type:</label>
                <input
                    type="text"
                    id="location_type"
                    name="location_type"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.location_type}
                />
                {(formik.errors.location_type && formik.touched?.location_type) ? <div>{formik.errors.location_type}</div> : null}
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default SubmitForm