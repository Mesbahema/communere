import { ErrorMessage, useField, useFormikContext } from "formik"
import {
    CircleMarker, MapContainer,
    Popup, TileLayer, useMapEvents
} from 'react-leaflet';
import { Fragment } from "react"
import { FormControl, Label } from "./styled"
import TextErrorComponent from "./TextErrorComponent"
import 'leaflet/dist/leaflet.css';

type InputPrpsType = {
    label: string,
    name: string,
}

const MapInput = ({
    label,
    name,
}: InputPrpsType) => {
    return (
        <FormControl>
            <Label htmlFor={name}>
                {label}
            </Label>
            <MapComponent name={name} />
            <ErrorMessage name={name} component={TextErrorComponent} />

        </FormControl>
    )
}

const MapComponent = ({ name }: {
    name: string,
}) => {

    return (

        <MapContainer
            center={[51.505, -0.09]}
            zoom={7} scrollWheelZoom={false}
            style={{
                width: '400px',
                height: '250px',
                margin: 'auto'
            }}
        >
            <TileComponent name={name} />

        </MapContainer>

    )
}

const TileComponent = ({ name }: {
    name: string,
}) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    const map = useMapEvents({
        click(e) {
            const position = [
                e.latlng.lat,
                e.latlng.lng
            ];
            setFieldValue(name, position)
        }
    });

    return (
        <Fragment>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {meta.value && <CircleMarker center={meta.value} />}
        </Fragment>
    )
}

export default MapInput