import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import { Actions } from 'react-native-router-flux'
import { onlyTime, BadgeCOP } from '../../Helpers/Conversions'
import DividerH from '../DividerH'

export default (data, key) => {
    return (
        <View style={styles.container}>
            <View style={styles.blockInfo}>
                <View style={styles.info}>
                    <Text style={styles.text}>{onlyTime(data.data.origin.time)}</Text>
                    <Text style={styles.text}>{data.data.origin.iata}</Text>
                </View>
                <DividerH />
                <View style={styles.info}>
                    <Text style={styles.text}>{onlyTime(data.data.destination.time)}</Text>
                    <Text style={styles.text}>{data.data.destination.iata}</Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => Actions.Flight(data.data)}
                style={styles.btn}
                activeOpacity={0.8}>
                <Text style={styles.textRate}>Tarifa estandar</Text>
                <Text style={styles.textTotal}>{BadgeCOP(data.data.price)}</Text>
                <Text style={styles.btnShop}>{'Ver'}</Text>
            </TouchableOpacity>
        </View>
    )
}