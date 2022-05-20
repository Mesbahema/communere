import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { FormControl, Label } from './styled'
import TextErrorComponent from './TextErrorComponent'

type InputPrpsType = {
    label: string,
    name: string,
    options?: { key: string, value: string }[]
}

const Select = ({
    label,
    name,
    options
}: InputPrpsType) => {
    return (
        <FormControl>
            <Label htmlFor={name}>
                {label}
            </Label>
            <Field as='select' id={name} name={name}>
                <option value=''>
                    Select {label}
                </option>
                {
                    options?.map(option => (<option value={option.value} key={option.value}>
                        {option.key}
                    </option>))
                }
            </Field>
            <ErrorMessage name={name} component={TextErrorComponent} />

        </FormControl>
    )
}

export default Select