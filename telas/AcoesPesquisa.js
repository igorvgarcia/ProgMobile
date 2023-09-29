import { ImageBackgroundComponent, View } from 'react-native'
import { Text, TextInput, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'

const AcoesPesquisa = (props) => {

    const goToModificarPesquisa = () => {
        props.navigation.navigate('NovaPesquisa')
    }

    const goToColetarDados = () => {
        props.navigation.navigate('NovaPesquisa')
    }

    const goToRelatorio = () => {
        props.navigation.navigate('NovaPesquisa')
    }
    


    return (
        <View style={estilos.view}>
            <View style={estilos.cardWrapper}>

                <View style={estilos.card} >
                    <Image source={require("../assets/images/icon_search.png")} />
                    <Text>Modificar</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={require("../assets/images/icon_search.png")} />
                    <Text>Coletar dados</Text>
                </View>
                <View style={estilos.card}>
                    <Image source={require("../assets/images/icon_search.png")} />
                    <Text>Relatório</Text>
                </View>

            </View>

        </View>
    )
}

const estilos = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#372775',
    },
    pesquisa: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: "90%",
        height: 50,
        margin: 10,

    },
    cardWrapper: {
        flex: 0.9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    card: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 300,
        height: 50,
        margin: 10,
    },
})


export default AcoesPesquisa