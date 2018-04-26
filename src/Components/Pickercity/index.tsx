import React from 'react'
import { View, Picker } from 'react-native'
import styles from './style'

export default (props) => {
    const { inputForm, type, name, placeholder } = props
    return (
        <View style={styles.container}>
            <Picker
                style={styles.picker}
                selectedValue={name}
                onValueChange={(choose) => inputForm(choose, type)}>
                <Picker.Item label={placeholder} value='' />
                <Picker.Item label='Bogota' value='Bogota' />
                <Picker.Item label='Cartagena' value='Cartagena' />
                <Picker.Item label='Cali' value='Cali' />
                <Picker.Item label='Medellin' value='Medellin' />
            </Picker>
        </View>
    )
}