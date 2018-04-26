import { getComponentStyle } from '../../Helpers/Stylus'

const styles = getComponentStyle({
    title: {
        marginTop: 20,
        marginHorizontal: 18,
        marginBottom: 10,
        fontSize: 22,
        textAlign: 'center'
    },
    container: {
        height: 60,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10,
        elevation: 3
    },
    oneWay: {
        marginLeft: 5,
        transform: [
            { rotateZ: '45deg' }
        ],
        fontSize: 30,
        color: 'rgba(200, 200, 200, 1)'
    },
    iconLogo: {
        fontSize: 100,
        color: 'rgba(100,100,100,0.2)'
    },
    contIcon: {
        marginTop: 30,
        alignItems: 'center'
    }
})

export default styles