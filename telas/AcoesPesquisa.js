import { ImageBackgroundComponent, View } from 'react-native'
import { Text, TextInput, Image, Button } from 'react-native'
import { StyleSheet } from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'

const AcoesPesquisa = (props) => {

    const goToModificarPesquisa = () => {
        props.navigation.navigate('NovaPesquisa')
    }

    const goToColetarDados = () => {
        props.navigation.navigate('ListagemColeta')
    }

    const goToRelatorio = () => {
        props.navigation.navigate('Relatorio')
    }
    


    return (
        <View style={estilos.view}>
            <View style={estilos.cardWrapper}>
                <TouchableOpacity style={estilos.cardTouchable}>
                <View style={estilos.card} >
                    <Image source={require("../assets/images/icone_modificar.png")} />
                    <Text style={estilos.texts}>Modificar</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToColetarDados} style={estilos.cardTouchable}>
                <View style={estilos.card}>
                    <Image source={require("../assets/images/icone_coletar_dados.png")} />
                    <Text style={estilos.texts}>Coletar dados</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToRelatorio} style={estilos.cardTouchable}>
                    <View style={estilos.card}>
                        <Image source={require("../assets/images/icone_relatorio.png")} />
                        <Text style={estilos.texts}>Relatório</Text>
                    </View>
                </TouchableOpacity>
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

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: "90%",

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
        backgroundColor: '#2B1D62',

        height: 800,
        margin: 10,
    },
    texts: {
        color: '#fff'
    },
    cardTouchable: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B1D62',
        margin: 10,
    },
})


export default AcoesPesquisa