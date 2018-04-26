import React from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import styles from './style'

export default (props) => {
    const { inputForm, type, placeHolder } = props
    return (
        <TextInput
            placeholder={placeHolder}
            onChangeText={(text) => inputForm(text, type)} />
    )
}