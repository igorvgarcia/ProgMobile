import { ImageBackgroundComponent, View } from 'react-native'
import { Text, TextInput, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { useSelector } from 'react-redux'

import { collection, initializeFirestore, addDoc, query, onSnapshot } from 'firebase/firestore'
import { app, storage } from '../src/firebase/config/firebase'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const ListagemColeta = (props) => {
    const navigation = useNavigation();

    const email = useSelector((state) => state.login.email)
    const password = useSelector((state) => state.login.password)

    const db = initializeFirestore(app, {experimentalForceLongPolling: true})
    const pesquisaCollection = collection(db, "pesquisa")

    const [listaPesquisas, setListaPesquisas] = useState([])

    useEffect( () => {
        const q = query(pesquisaCollection)

        const unSubscribe = onSnapshot(q, (snapshot) => {
            const pesquisas = []
            snapshot.forEach( (doc) => {
                pesquisas.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            console.log(pesquisas)
            setListaPesquisas(pesquisas)
        })
    }, []) 

    if(!email) {
        console.log(email)
    }
    else {
        console.log(email)
    }

    const goToModificarPesquisa = (id, nome, data, imagemUrl, imagemNome, coletas) => {
        console.log("id: " + id)
        props.navigation.navigate('Coleta', { id: id, nome: nome, data: data, imagemUrl: imagemUrl, imagemNome: imagemNome, coletas: coletas })
    }

    return (
        <View style={estilos.view}>
            <View style={estilos.cardWrapper}>
                {listaPesquisas.map((pesquisa, index) => (
                    
                    <TouchableOpacity
                    key={index}
                    style={estilos.cardTouchable}
                    onPress={() => goToModificarPesquisa(pesquisa.id, pesquisa.nome, pesquisa.data, pesquisa.imagemUrl, pesquisa.imagem, pesquisa.coleta)}
                    >
                    <View style={estilos.card}>
                        <Image source={{uri: pesquisa.imagemUrl}} style={{width:'40%', height: '30%'}}></Image>                  
                        <Text>{pesquisa.nome}</Text>
                    </View>
                    </TouchableOpacity>
                ))}
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
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
})


export default ListagemColeta