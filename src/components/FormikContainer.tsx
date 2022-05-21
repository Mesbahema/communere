import { Formik, Field, Form, FieldProps } from 'formik'
import * as Yup from "yup"
import FormikControl from './base/form/FormikControl'

import styled from 'styled-components';
import { CancelButton, SubmitButton } from './base/Button/Button.styles';

const FormLayout = styled.div({
    border: '2px solid blue',
    borderRadius: '10px',
    marginTop: '20px',
    backgroundColor: 'blue'
});

const TitleSection = styled.div({
    fontWeight: 'bold',
    padding: '15px',
    color: 'white',
    borderRadius: '10px 10px 0 0',
})
const MainSection = styled.div({
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '0 0 7px 7px',
})

const ButtonContainer = styled.div({
    width: '160px',
    display: 'flex',
    justifyContent: 'space-between'
})

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
        location_on_map: '',
        logo: ''
    }

    const validationSchema = Yup.object({
        location_name: Yup.string().required('Location name is required'),
        location_type: Yup.string().required('Location type is required'),
        location_on_map: Yup.array().required('Location on map is required'),
        logo: Yup.mixed().required('Logo is required'),
    })

    const onSubmit = (values: typeof initialValues) => {
        console.log('submitted', values)
    }

    return (
        // <FormLayout>
        <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}
        >
            {formik => {
                return (
                    <FormLayout>
                        <TitleSection>
                            Share Location
                        </TitleSection>
                        <MainSection>
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
                                    control="file"
                                    label='Logo:'
                                    name='logo'
                                    options={locationTypeOptions}
                                />
                                <ButtonContainer>
                                    <SubmitButton type='submit'>Submit</SubmitButton>
                                    <CancelButton type='button' onClick={() => formik.resetForm()}>Cancel</CancelButton>
                                </ButtonContainer>
                            </Form>
                        </MainSection>
                    </FormLayout>)
            }}
        </Formik>
        // </FormLayout>
    )
}

export default FormikContainer
