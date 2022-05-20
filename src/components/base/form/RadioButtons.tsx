import { Field, ErrorMessage, FormikValues, FormikProps, FieldMetaProps } from "formik"
import { Fragment, InputHTMLAttributes } from "react"
import { FormControl, Label } from "./styled"
import TextErrorComponent from "./TextErrorComponent"

type InputPrpsType = {
    label: string,
    name: string,
    type: string,
    options?: { key: string, value: string }[]
}

const RadioButtons = ({
    label,
    name,
    type,
    options
}: InputPrpsType) => {
    return (
        <FormControl>
            <Label htmlFor={name}>
                {label}
            </Label>
            <Field id={name} name={name}>
                {(props: {
                    field: InputHTMLAttributes<HTMLInputElement>,
                    form: FormikProps<FormikValues>,
                    meta: FieldMetaProps<FormikValues>
                }) => {
                    const { field, form, meta } = props
                    // console.log('form', form)
                    return options?.map(option => (
                        <Fragment key={option.value}>
                            <input
                                type='radio'
                                id={option.value}
                                {...field}
                                value={option.value}
                                // onChange={() => form.setValues({...form.values, [name]: option.value})}
                                checked={field.value === option.value}
                            />
                            <Label htmlFor={option.value}>
                                {option.key}
                            </Label>
                        </Fragment>))
                }}
            </Field>
            <ErrorMessage name={name} component={TextErrorComponent} />

        </FormControl>
    )
}

export default RadioButtons