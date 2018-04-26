import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default (props) => {
    const { type, datePicker, name, nameIcon } = props
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                datePicker(type)
            }}>
            <Icon style={styles.icon} name={nameIcon} />
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity >)
}