import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import Item from '../../Components/Item'
import Card from '../../Components/Card'
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class ListFlight extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    typeFlight = () => {
        switch (this.props.tipo) {
            case 'round':
                return this.listoRound()
            case 'going':
                return this.listGoing()
            case 'multi':
                return this.listoMulti()
            default:
                return this.listoRound()
        }
    }

    listoRound = () => {
        return <View>
            <View style={styles.contentList}>
                <Text style={styles.textgoing}>{'Vuelos de ida'}
                    <Icon name={'arrow-right-bold'} style={styles.textgoingIcon} />
                </Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.props.response.going.map((item, index) => (
                        < Card key={index.toString()} >
                            <Item data={item} />
                        </Card>
                    ))}
                </ScrollView>
            </View>
            <View style={styles.contentList}>
                <Text style={styles.textgoing}>{'Vuelos de regreso'}
                    <Icon name={'arrow-left-bold'} style={styles.textgoingIcon} />
                </Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.props.response.back.map((item, index) => (
                        < Card key={index.toString()} >
                            <Item data={item} />
                        </Card>
                    ))}
                </ScrollView>
            </View>
        </View>
    }
    listGoing = () => {
        return <View style={styles.goingCont}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {this.props.response.going.map((item, index) => (
                    < Card key={index.toString()} >
                        <Item data={item} />
                    </Card>
                ))}
            </ScrollView>
        </View>
    }
    listoMulti = () => {
        const arrKeys = Object.keys(this.props.response)
        function renderItem(data, response) {
            return <View>
                <Text style={styles.textgoing}>{`Vuelos ${data}`}</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {response[data].map((element, index) => (
                        <Card key={index.toString()} >
                            <Item data={element} />
                        </Card>
                    ))}
                </ScrollView>
            </View>
        }
        return <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {arrKeys.map((item, index) => (
                    <Card key={index.toString()} >
                        {renderItem(item, this.props.response)}
                    </Card>
                ))}
            </ScrollView>
        </View>
    }

    render() {
        return (
            <View>
                {this.typeFlight()}
            </View>
        )
    }
}