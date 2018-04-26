import { getComponentStyle } from '../../Helpers/Stylus'

const styles = getComponentStyle({
    image: {
        width: 342,
        height: 200
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container: {
        backgroundColor: 'rgba(60,145,145,1)'
    },
    contentDetails: {
        marginTop: 7,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    detailsFlight: {
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 165
    },
    contentPrice: {
        height: 50,
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'rgba(220,220,220,1)'
    },
    textTotal: {
        fontSize: 14,
        color: 'rgba(30,74,74,1)'
    },
    textPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'rgba(30,74,74,1)'
    },
    textDetail: {
        color: 'white'
    },
    textDetailCity: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    }
})

export default styles