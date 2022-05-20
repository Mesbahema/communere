import React from 'react'
import Input from './Input'
import RadioButtons from './RadioButtons'
import Select from './Select'


type FormikControlPropsType = {
    control: 'input' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date',
    label: string,
    name: string,
    type: string,
    options?: { key: string, value: string }[]
}
const FormikControl = ({control, name, label, type, options} : FormikControlPropsType) => {
  switch(control) {
      case('input'): return <Input name={name} label={label} type={type}/>
      case('select'): return <Select name={name} label={label} type={type} options={options}/>
      case('radio'): return <RadioButtons name={name} label={label} type={type} options={options}/>
      default: return null
  }
}

export default FormikControl