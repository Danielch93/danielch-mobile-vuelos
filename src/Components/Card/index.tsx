import React from 'react'
import { View } from 'react-native'

import styles from './style'

export default (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}