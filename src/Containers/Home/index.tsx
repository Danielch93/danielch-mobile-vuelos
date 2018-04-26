import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, DatePickerAndroid } from 'react-native'
import { inputsRequired } from '../../Helpers/Utils'
import React, { Component } from 'react'
import Card from '../../Components/Card'
import Seeker from '../../Components/Seeker'
import BtnSearch from '../../Components/BtnSearch'
import SearchRound from '../../Components/SearchRound'
import SearchGoing from '../../Components/SearchGoing'
import SearchMulti from '../../Components/SearchMulti'
import { onlyToDate } from '../../Helpers/Conversions'
import DividerV from '../../Components/DividerV'
import styles from './style'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addContent: [],
            typeSearch: 'round',
            origen: '',
            destino: '',
            ida: onlyToDate(new Date()),
            regreso: onlyToDate(new Date())
        }
        this.inputForm = this.inputForm.bind(this)
        this.validForm = this.validForm.bind(this)
        this.typeFlight = this.typeFlight.bind(this)
        this.datePicker = this.datePicker.bind(this)
    }

    inputForm(text, type) {
        switch (type) {
            case 'origen':
                this.setState({ origen: text })
                break
            case 'destino':
                this.setState({ destino: text })
                break
            default:
                return
        }
    }

    validForm = () => {
        const { origen, destino } = this.state
        if (origen && destino) {
            return true
        } else {
            inputsRequired()
            return false
        }
    }

    typeFlight = (type) => {
        switch (type) {
            case 'round':
                this.setState({ typeSearch: 'round' })
                break
            case 'going':
                this.setState({ typeSearch: 'going' })
                break
            case 'multi':
                this.setState({ typeSearch: 'multi' })
                break
            default:
                break
        }
    }

    searchBox = () => {
        switch (this.state.typeSearch) {
            case 'round':
                return <SearchRound inputForm={this.inputForm}
                    datePicker={this.datePicker} name={this.state} />

            case 'going':
                return <SearchGoing inputForm={this.inputForm}
                    datePicker={this.datePicker} name={this.state} />

            case 'multi':
                return <SearchMulti inputForm={this.inputForm}
                    datePicker={this.datePicker} name={this.state} state={this.state.addContent} />

            default:
                return <SearchRound inputForm={this.inputForm}
                    datePicker={this.datePicker} name={this.state} />
        }
    }

    async datePicker(type) {
        const { action, year, month, day } = await DatePickerAndroid.open({
            date: new Date()
        })
        if (action !== DatePickerAndroid.dismissedAction) {
            const date = onlyToDate(new Date(year, month, day))
            const changeDate = type === 'going' ? this.setState({ ida: date })
                : this.setState({ regreso: date })
        }
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Seeker name={'Ida y regreso'} typeFlight={this.typeFlight} type={'round'} />
                    <DividerV />
                    <Seeker name={'Solo ida'} typeFlight={this.typeFlight} type={'going'} />
                    <DividerV />
                    <Seeker name={'Multidestino'} typeFlight={this.typeFlight} type={'multi'} />
                </View>
                <Card>
                    {this.searchBox()}
                    <BtnSearch
                        inputs={this.state}
                        validForm={this.validForm}
                        type={this.state.typeSearch} />
                </Card>
                <View style={styles.contIcon}>
                    <Icon style={styles.iconLogo} name={'airplane'} />
                </View>
            </View>
        )
    }
}