import {View, Text, StyleSheet} from 'react-native'

const Logo = () => {
    return (
        <View style={estilos.logo}>
            <Text style={estilos.LogoText}>Satisfying.you :D</Text>
        </View>
        
    )
}

const estilos = StyleSheet.create({
    logo: {
    
        marginTop: 40,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    LogoText: {
        fontSize: 30,
        color: 'white',

        fontFamily: 'AveriaLibre-Regular'
    }

})

export default Logo