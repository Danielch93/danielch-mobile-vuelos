import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './style'
import Btndate from '../BtnDate'
import Pickercity from '../Pickercity'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default (props) => {
    const { inputForm, datePicker, name } = props
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Icon name={'airplane-takeoff'} style={styles.going} />
                <Pickercity inputForm={inputForm} type={'origen'} name={name.origen} placeholder={'Salgo de...'} />
            </View>
            <View style={styles.container}>
                <Icon name={'airplane-landing'} style={styles.going} />
                <Pickercity inputForm={inputForm} type={'destino'} name={name.destino} placeholder={'Voy a...'} />
            </View>
            <View style={styles.containerDate}>
                <Btndate type={'going'} datePicker={datePicker} name={name.ida} nameIcon={'calendar-today'} />
            </View>
        </ScrollView>
    )
}