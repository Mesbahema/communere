import { Field, ErrorMessage } from "formik"
import { FormControl, Label } from "./styled"
import TextErrorComponent from "./TextErrorComponent"

type InputPrpsType = {
    label: string,
    name: string,
    type: string
}
const Input = ({
    label,
    name,
    type
}: InputPrpsType) => {
  return (
    <FormControl>
        <Label htmlFor={name}>
            {label}
        </Label>
        <Field id={name} name={name}/>
        <ErrorMessage name={name} component={TextErrorComponent}/>
        
    </FormControl>
  )
}

export default Input