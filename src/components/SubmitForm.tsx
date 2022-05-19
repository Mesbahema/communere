import { Formik, Form, Field, ErrorMessage, FormikProps, FormikValues, FormikConfig, FieldInputProps, FieldMetaProps } from "formik"
import { InputHTMLAttributes, useEffect } from "react"
import * as Yup from "yup"
import TextErrorComponent from "./base/form/TextErrorComponent"

const SubmitForm = () => {
    const initialValues = {
        location_name: '',
        location_type: '',
        address: ''
    }

    const validationSchema = Yup.object({
        location_name: Yup.string().required('Location name is required'),
        location_type: Yup.string().required('Location type is required'),
        address: Yup.string().required('Address is required'),
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
            <Form>
                <div>
                    <label
                        htmlFor="location_name">Location name:</label>
                    <Field
                        type="text"
                        id="location_name"
                        name="location_name"
                    />
                    <ErrorMessage component={TextErrorComponent} name="location_name" />
                </div>
                <div>
                    <label htmlFor="location_type">Location type:</label>
                    <Field
                        type="text"
                        id="location_type"
                        name="location_type"
                    />
                    <ErrorMessage component={TextErrorComponent} name="location_type" />
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <Field
                        name="address"
                    >
                        {
                            (props: {
                                // field: FieldInputProps<FormikValues>,
                                field: InputHTMLAttributes<HTMLInputElement>,
                                form: FormikProps<FormikValues>,
                                meta: FieldMetaProps<FormikValues>
                            }) => {
                                const { field, form, meta } = props
                                return (
                                    <div>
                                        <input type="text" id="address" {...field} />
                                        {(meta.touched && meta.error) ? <div>{meta.error}</div> : null}
                                        <button type="button" onClick={() => form.setFieldValue('location_type', 'kir')}></button>
                                    </div>
                                )
                            }
                        }
                    </Field>
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default SubmitForm