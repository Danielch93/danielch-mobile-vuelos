import { getComponentStyle } from '../../Helpers/Stylus'

const styles = getComponentStyle({
    goingCont: {
        marginTop: 10
    },
    textgoing: {
        marginLeft: 9,
        fontSize: 16,
        marginTop: 3
    },
    textgoingIcon: {
        color: 'rgba(30,74,74,1)',
        fontSize: 15
    },
    contentList: {
        marginBottom: 20,
        backgroundColor: 'rgba(255,255,255,1)',
        maxHeight: 250,
        marginHorizontal: 6,
        elevation: 3
    }
})

export default styles