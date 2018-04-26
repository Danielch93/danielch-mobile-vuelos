import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { goService } from '../../Helpers/Utils'

export default (props) => {
    const { inputs, validForm, type } = props
    return (
        <TouchableOpacity
            onPress={() => {
                if (validForm()) {
                    goService(type, inputs.origen, inputs.destino, inputs.ida, inputs.regreso)
                }
            }}
            style={styles.container}>
            <Text style={styles.text}>Buscar</Text>
        </TouchableOpacity>
    )
}