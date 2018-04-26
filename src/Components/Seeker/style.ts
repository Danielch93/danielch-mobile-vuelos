import { getComponentStyle } from '../../Helpers/Stylus'

const styles = getComponentStyle({
    box: {
        height: 60,
        // padding: 5,
        width: 90,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1
    },
    text: {
        color: 'rgba(106,106,106,1)'
    }
})

export default styles