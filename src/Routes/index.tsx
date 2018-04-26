import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Home from '../Containers/Home'
import ListFlight from '../Containers/ListFlight'
import Flight from '../Containers/Flight'

export default class router extends Component {
    render() {
        return (
            <Router>
                <Scene key='root' navigationBarStyle={{ backgroundColor: 'rgba(56,141,141,1)' }}
                    titleStyle={{ color: 'white' }}>
                    <Scene key='Home' title={'Busqueda de vuelos'} component={Home} initial />
                    <Scene key='ListFlight' title={'Resultados de la busqueda'} component={ListFlight} />
                    <Scene key='Flight' title={'Detalles'} component={Flight} />
                </Scene>
            </Router>)
    }
}