import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './style'

export default (props) => {
    const { name, typeFlight, type } = props
    return (
        <TouchableOpacity
            onPress={() => {
                typeFlight(type)
            }}
            style={styles.box}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}