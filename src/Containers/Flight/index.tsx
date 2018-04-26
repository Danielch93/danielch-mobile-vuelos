import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Card from '../../Components/Card'
import styles from './style'
import { onlyTime, BadgeCOP, onlyToDate } from '../../Helpers/Conversions'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Flight extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { origin, destination, segments, price } = this.props
        return (
            <Card>
                <Image
                    style={styles.image}
                    source={{ uri: `${this.props.image}` }}
                />
                <View style={styles.container}>
                    <View style={styles.contentDetails}>
                        <View style={styles.detailsFlight}>
                            <Text style={styles.textDetailCity}>
                                <Icon name={'airplane-takeoff'} /> {origin.name}
                            </Text>
                            <Text style={styles.textDetail}>{'Salida'} {onlyToDate(origin.date)}</Text>
                            <Text style={styles.textDetail}>{'Hora:'} {onlyTime(origin.time)}</Text>
                        </View>
                        <View style={styles.detailsFlight}>
                            <Text style={styles.textDetailCity}>
                                <Icon name={'airplane-landing'} /> {destination.name}
                            </Text>
                            <Text style={styles.textDetail}>{'Llegada'} {onlyToDate(destination.date)}</Text>
                            <Text style={styles.textDetail}>{'Hora:'} {onlyTime(destination.time)}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.contentPrice}>
                    <Text style={styles.textPrice}>
                        <Text style={styles.textTotal}>Total </Text>
                        {BadgeCOP(price)}</Text>
                </View>
            </Card>
        )
    }
}