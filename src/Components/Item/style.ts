import { getComponentStyle } from '../../Helpers/Stylus'

const styles = getComponentStyle({
    container: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center'
    },
    info: {
        flexDirection: 'row',
        width: 80,
        // borderWidth: 1,
        borderColor: 'red',
        marginLeft: 10
    },
    blockInfo: {
        marginLeft: 6,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-around',
        // borderWidth: 1,
        borderColor: 'black'
    },
    text: {
        // borderWidth: 1,
        // marginRight: 2,
        // marginLeft: 2
    },
    btn: {
        // borderWidth: 1,
        height: 100,
        width: 136,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(55,140,137,1)'
    },
    btnShop: {
        marginTop: 10,
        fontSize: 20,
        color: 'rgba(255,255,255,1)',
        fontWeight: 'bold'
    },
    textRate: {
        fontSize: 12,
        color: 'rgba(255,255,255,1)'
    },
    textTotal: {
        fontSize: 16,
        color: 'rgba(240,215,83,1)',
        fontWeight: 'bold'
    }
})

export default styles