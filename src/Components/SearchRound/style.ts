import { getComponentStyle } from '../../Helpers/Stylus'

const styles = getComponentStyle({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    },
    going: {
        marginLeft: 15,
        marginRight: 5,
        fontSize: 30
    },
    containerDate: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
})

export default styles