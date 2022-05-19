import React from "react"
import { TextError } from "./styled"

const TextErrorComponent = (props : any) => {
    return(
        <TextError>
            {props.children}
        </TextError>
    )
}

export default TextErrorComponent