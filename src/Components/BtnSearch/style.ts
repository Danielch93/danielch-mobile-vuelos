import { getComponentStyle } from '../../Helpers/Stylus'

const styles = getComponentStyle({
    container: {
        marginTop: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(40,100,100,1)'
    },
    text: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default styles