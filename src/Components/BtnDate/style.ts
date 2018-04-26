import { getComponentStyle } from '../../Helpers/Stylus'

const styles = getComponentStyle({
    container: {
        width: 171,
        marginTop: 10,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16
    },
    text: {
        marginLeft: 10,
        fontSize: 12
    },
    icon: {
        fontSize: 30
    }
})

export default styles