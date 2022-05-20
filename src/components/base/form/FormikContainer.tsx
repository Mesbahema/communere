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
        radio_options: '',
        location_on_map: ''
    }

    const validationSchema = Yup.object({
        location_name: Yup.string().required('Location name is required'),
        location_type: Yup.string().required('Location type is required'),
        radio_options: Yup.string().required('Radio options is required'),
        location_on_map: Yup.array().required('Location on map is required')
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
                            label='Location Name:'
                            name='location_name'
                        />
                        <FormikControl
                            control="map"
                            label='Location On Map:'
                            name='location_on_map'
                            options={locationTypeOptions}
                        />
                        <FormikControl
                            control="select"
                            label='Location Type:'
                            name='location_type'
                            options={locationTypeOptions}
                        />
                        <FormikControl
                            control="radio"
                            label='Radio Options:'
                            name='radio_options'
                            options={locationTypeOptions}
                        />

                        <button type='submit'>Submit</button>
                    </Form>)
            }}
        </Formik>
    )
}

export default FormikContainer
