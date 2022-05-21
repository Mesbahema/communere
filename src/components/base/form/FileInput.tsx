import { ErrorMessage, useField } from "formik"

import { FormControl, Label } from "./styled"
import TextErrorComponent from "./TextErrorComponent"

type InputPrpsType = {
    label: string,
    name: string,
}

const FileInput = ({
    label,
    name,
}: InputPrpsType) => {
    return (
        <FormControl>
            <Label htmlFor={name}>
                {label}
            </Label>
                <FileInputComponent name={name}/>
            <ErrorMessage name={name} component={TextErrorComponent} />

        </FormControl>
    )
}

const FileInputComponent = ({ name }: {
    name: string,
}) => {
    const [field, meta] = useField(name);
    return (
        <div>
            <input type="file" id="address" {...field}/>
        </div>
    )
}

export default FileInput