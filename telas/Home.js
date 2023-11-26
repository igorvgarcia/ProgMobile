import { ImageBackgroundComponent, View } from 'react-native'
import { Text, TextInput, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { useSelector } from 'react-redux'

const Home = (props) => {
    const email = useSelector((state) => state.login.email)
    const password = useSelector((state) => state.login.password)

    if(!email) {
        console.log(email)
    }
    else {
        console.log(email)
    }

    const [pesquisa, setPesquisa] = useState('')

    const goToNovaPesquisa = () => {
        props.navigation.navigate('NovaPesquisa')
    }

    const goToModificarPesquisa = () => {
        props.navigation.navigate('modificarPesquisa')
    }

    const goToAcoesPesquisa = () => {
        props.navigation.navigate('AcoesPesquisa')
    }

    const goToColeta = () => {
        props.navigation.navigate('Coleta')
    }

    return (
        <View style={estilos.view}>
            <View style={estilos.pesquisa}>
                <Image source={require("../assets/images/icon_search.png")} />
                <TextInput style={estilos.input} placeholder="Insira o termo da busca" />

            </View>

            <View style={estilos.cardWrapper}>
                <TouchableOpacity style={estilos.cardTouchable} onPress={goToModificarPesquisa}>
                    <View style={estilos.card}>
                        <Image source={require("../assets/images/icon_search.png")} />
                        <Text>SECOMP 2023</Text>
                        <Text>22/22/2023</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={estilos.cardTouchable}>
                    <View style={estilos.card}>
                        <Image source={require("../assets/images/icon_search.png")} />
                        <Text>UBUNTU 2022</Text>
                        <Text>22/22/2022</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View>
                <Botao tipoBotao="botaoCriar" texto="NOVA PESQUISA" onPress={goToNovaPesquisa} />
                <Botao tipoBotao="botaoCriar" texto="AÇÕES DE PESQUISA" onPress={goToAcoesPesquisa} />
                <Botao tipoBotao="botaoCriar" texto="COLETA" onPress={goToColeta} />
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
    cardTouchable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 10,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default Home