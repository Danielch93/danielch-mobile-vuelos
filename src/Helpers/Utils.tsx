import { ToastAndroid } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getFlights, getFlightsRoundTrip, getFlightsMultiDest } from '../Services/Connections'

export const flightNotFound = () => {
    return ToastAndroid.show('No encontramos el vuelo', ToastAndroid.SHORT)
}

export const inputsRequired = () => {
    return ToastAndroid.show('Por favor, ingresar todos los campos', ToastAndroid.LONG)
}

export const goService = (type, origen, destino, ida, regreso?) => {
    switch (type) {
        case 'round':
            getFlightsRoundTrip(origen, destino, ida, regreso).then(response => {
                const data = { 'response': response, 'tipo': type }
                if ((response.going).length === 0 || (response.back).length === 0) {
                    flightNotFound()
                } else {
                    Actions.ListFlight(data)
                }
            })
            break
        case 'going':
            return getFlights(origen, destino, ida).then(response => {
                const data = { 'response': { 'going': response }, 'tipo': type }
                if ((response).length === 0 || (response).length === 0) {
                    flightNotFound()
                } else {
                    Actions.ListFlight(data)
                }
            })

        case 'multi':
            const travels = {
                multi: [{ ori: `${origen}`, des: `${destino}`, depart: `${ida}` },
                { ori: 'Bogota', des: 'Cartagena', depart: '2018-04-20' },
                { ori: 'Medellin', des: 'Cali', depart: '2018-04-06' }]
            }
            return getFlightsMultiDest(travels).then(response => {
                const data = { 'response': response, 'tipo': type }
                Actions.ListFlight(data)
            })
        default:
            break
    }
}
