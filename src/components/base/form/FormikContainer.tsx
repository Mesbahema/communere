import { Formik, Field, Form, FieldProps } from 'formik'
import * as Yup from "yup"
import FormikControl from './FormikControl'

const locationTypeOptions = [
    {
        key: 'Home',
        value: 'home'
    },
    {
        key: 'Business',
        value: 'business'
    }
]

const FormikContainer = () => {
    const initialValues = {
        location_name: '',
        location_type: '',
    }

    const validationSchema = Yup.object({
        location_name: Yup.string().required('Location name is required'),
        location_type: Yup.string().required('Location type is required'),
    })

    const onSubmit = (values: typeof initialValues) => {
        console.log('submitted', values)
    }



    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {formik => {
                // console.log('formik', formik.values)
                return (
                    <Form>
                        <FormikControl
                            control="input"
                            type="text"
                            label='Location Name'
                            name='location_name'
                        />
                        <FormikControl
                            control="select"
                            type="text"
                            label='Location Type'
                            name='location_type'
                            options={locationTypeOptions}
                        />
                        <button type='submit'>Submit</button>
                    </Form>)
            }}
        </Formik>
    )
}

export default FormikContainer