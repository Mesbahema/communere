import FileInput from './FileInput'
import Input from './Input'
import MapInput from './MapInput'
import RadioButtons from './RadioButtons'
import Select from './Select'


type FormikControlPropsType = {
    control: 'input' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date' | 'map' | 'file',
    label: string,
    name: string,
    options?: { key: string, value: string }[]
}
const FormikControl = ({control, name, label, options} : FormikControlPropsType) => {
  switch(control) {
      case('input'): return <Input name={name} label={label}/>
      case('select'): return <Select name={name} label={label} options={options}/>
      case('radio'): return <RadioButtons name={name} label={label} options={options}/>
      case('map'): return <MapInput name={name} label={label}/>
      case('file'): return <FileInput name={name} label={label}/>
      default: return null
  }
}

export default FormikControl