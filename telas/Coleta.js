import { ImageBackgroundComponent, View } from 'react-native'
import { Text, TextInput, Image, Button } from 'react-native'
import { StyleSheet } from 'react-native'
import { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { collection, initializeFirestore, addDoc, query, onSnapshot, updateDoc, doc, deleteDoc} from 'firebase/firestore'
import { app, storage } from '../src/firebase/config/firebase'

import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'

const Coleta = (props) => {
    const route = useRoute();

    const { id, nome, data, imagemUrl, imagemNome, coletas } = route.params;

    const db = initializeFirestore(app, {experimentalForceLongPolling: true})

    console.log("aqui: " + coletas.pessimo)

    function realizarColeta(value) {
        const pesquisaRef = doc(db, "pesquisa", id)
        console.log(value)

        switch(value) {
            case 'pessimo':coletas.pessimo++; break;
            case 'ruim': coletas.ruim++; break;
            case 'neutro': coletas.neutro++; break;
            case 'bom': coletas.bom++; break;
            case 'excelente': coletas.excelente++; break;
        }

        updateDoc(pesquisaRef, {
            coleta: coletas
        })
        .then(
            (result) => {
                props.navigation.navigate('AgradecimentoParticipacao')
            }
        )
        .catch(
            (error) => {
              console.log("Erro")
            }
        )
    } 

    return (
        <View style={estilos.view}>
            <View style={estilos.cardWrapper}>
                <TouchableOpacity onPress={() => realizarColeta('pessimo')} style={estilos.cardTouchable}>
                    <View style={estilos.card}>
                        <Image source={require("../assets/images/coleta2pessimo.png")} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => realizarColeta('ruim')} style={estilos.cardTouchable}>
                    <View style={estilos.card}>
                        <Image source={require("../assets/images/coleta2ruim.png")} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => realizarColeta('neutro')} style={estilos.cardTouchable}>
                    <View style={estilos.card}>
                        <Image source={require("../assets/images/coleta2neutro.png")} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => realizarColeta('bom')} style={estilos.cardTouchable}>
                    <View style={estilos.card}>
                        <Image source={require("../assets/images/coleta2bom.png")} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => realizarColeta('excelente')} style={estilos.cardTouchable}>
                    <View style={estilos.card}>
                        <Image source={require("../assets/images/coletaexcelente.png")} />
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

    },
    texts: {
        color: '#fff'
    },
    cardTouchable: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2B1D62',

    },
})


export default Coleta