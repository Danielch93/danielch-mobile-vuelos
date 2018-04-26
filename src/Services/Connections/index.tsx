export const getHome = () => {
    return fetch('http://10.0.1.7:3004/')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.data
        })
}

export const getFlights = (ori, des, depart) => {
    return fetch(`http://10.0.1.7:3004/vuelos?ori=${ori}&des=${des}&depart=${depart}`)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.data
        })
}

export const getFlightsRoundTrip = (ori, des, dep, retu) => {
    return fetch(`http://10.0.1.7:3004/vuelos-ida-regreso?ori=${ori}&des=${des}&depart=${dep}&return=${retu}`)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.round
        })
}

export const getFlightsMultiDest = (travels) => {
    return fetch('http://10.0.1.7:3004/vuelos-multi-destino', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(travels)
    }).then((res) => res.json())
        .then((res) => res)

}
