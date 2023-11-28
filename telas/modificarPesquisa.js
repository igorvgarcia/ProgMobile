// Importação
import { ImageBackgroundComponent, View, Modal } from 'react-native'
import { Text, TextInput, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'
import { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native';

import { collection, initializeFirestore, addDoc, query, onSnapshot, updateDoc, doc, deleteDoc} from 'firebase/firestore'
import { app, storage } from '../src/firebase/config/firebase'
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject  } from 'firebase/storage'

import { launchCamera, launchImageLibrary } from 'react-native-image-picker'

//Definição de função
const modificarPesquisa = (props) => {
  const route = useRoute();

  const { id, nome, data, imagemUrl, imagemNome } = route.params;

  const [nomeAtual, setNomeAtual] = useState(nome)
  const [dataAtual, setDataAtual] = useState(data)
  const [imagem, setImagem] = useState('')
  const [imagem2, setImagem2] = useState('')
  const [foto, setFoto] = useState()
  const [novaImagem, setNovaImagem] = useState(false)

  console.log("modificar id: " + id)

  const [modalVisible, setModalVisible] = useState(false);

  const db = initializeFirestore(app, {experimentalForceLongPolling: true})
  const pesquisaCollection = collection(db, "pesquisa")

  useEffect( () => {
    setNomeAtual(nome)
    setDataAtual(data)
    setImagem(imagemUrl)
  }, []) 

  function excluirPesquisa() {
    const desertRef = ref(storage, imagemNome);

    deleteObject(desertRef).then(() => {
      deleteDoc(doc(db, "pesquisa", id))
      props.navigation.navigate('Home')
    }).catch((error) => {
      console.log("Erro")
    });
  }

  async function modificarPesquisa() {
    const pesquisaRef = doc(db, "pesquisa", id)
    const desertRef = ref(storage, imagemNome);

    const nomeArquivo = (nomeAtual + Math.floor(Math.random() * 100).toString() + ".jpeg")
    const imageRef = ref(storage, nomeArquivo)
    const file = await fetch(imagem2)
    const blob = await file.blob()

    deleteObject(desertRef).then(() => {
      uploadBytes(imageRef, blob, {contentType: 'image/jpeg'})
      .then(
        (result) => {
          console.log("Sucesso")
          getDownloadURL(imageRef)
            .then(
              (result) => {
                updateDoc(pesquisaRef, {
                  nome: nomeAtual,
                  data: dataAtual,
                  imagemUrl: result,
                  imagem: nomeArquivo
                })
                
                props.navigation.navigate('Home')
              }
            )
            .catch(
              (error) => {
                console.log("Erro")
              }
            )
        }
      )
      .catch(
        (error) => {
          console.log("Erro")
        }
      )
    }).catch((error) => {
      console.log("Erro")
    });
    
  }

  function addFoto() {
    launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 })
      .then(
        (result) => {  
          setNovaImagem(true) 
          setImagem2(result.assets[0].uri)
          setFoto(result.assets[0])
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
      <View >
        <View style={estilos.logo}>
          <Logo />
        </View>

        <View style={estilos.FormContainer}>
          <Text style={estilos.FormText}>Nome</Text>
          <TextInput style={estilos.input} placeholder="Digite o nome" value={nomeAtual} onChangeText={setNomeAtual}/>
          <Text style={estilos.FormText} >Data</Text>
          <TextInput style={estilos.input} value={dataAtual} onChangeText={setDataAtual} />
          <Text style={estilos.FormText}>Imagem</Text>

          {
            imagem ? <Image source={{ uri: imagem }} style={{width:'50%', height: '30%'}}></Image> : null
          }

          <Botao tipoBotao="botaoEntrar" texto="ADCIONAR FOTO" estilos={estilos.botao} estilosTexto={estilos.texto} onPress={addFoto} />
          <Botao tipoBotao="botaoEntrar" texto="SALVAR" estilos={estilos.botao} estilosTexto={estilos.texto} onPress={modificarPesquisa} />
          <Botao mode="elevated" estilos={estilos.botaoExcluir} onPress={() => setModalVisible(true)} texto="EXCLUIR" style={estilos.buttonExcluir}></Botao>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={estilos.modal}>
          <View style={estilos.modalInner}>
            <Text style={estilos.modalText}>Tem certeza que deseja remover essa pesquisa?</Text>
            <View style={estilos.wrapperModalAction}>
              <Botao mode="elevated" onPress={excluirPesquisa} style={estilos.buttonExcluir} texto="SIM"></Botao>
              <Botao mode="elevated" onPress={() => setModalVisible(false)} style={estilos.buttonCancelarModal} texto="CANCELAR"></Botao>
            </View>
          </View>
        </View>
      </Modal>
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
  logo: {
    flex: 0.2,
  },
  FormContainer: {
    flex: 0.8,
    justifyContent: 'center',
  },
  FormText: {
    fontSize: 20,
    color: 'white',
    margin: 6,
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  BotaoCreateAccount: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#419ED7',
  },
  BotaoText: {
    fontSize: 15,
    color: 'white',
  },
  input: {
    backgroundColor: 'white',

  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    alignSelf: 'right',
    fontFamily: 'AveriaLibre-Regular'
  },
  modal: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  modalInner: {
    backgroundColor: '#372775',
    padding: 20,
    width: 300
  },
  modalText: {
    color: '#FFFFFF',
    fontSize: 16,
    alignSelf: 'center',
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center'
  },
  imageExcluir: {
    height: 20,
    width: 20,
  },
  buttonCancelarModal: {
    backgroundColor: '#3F92C5',
    width: 160,
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    padding: 0,
    alignSelf: 'right',
    borderRadius: 0,
  },
  buttonExcluir: {
    backgroundColor: '#FD7979',
    width: 130,
    height: 40,
    marginTop: 10,
    borderWidth: 1,
    padding: 0,
    alignSelf: 'left',
    borderRadius: 0,
  },
  wrapperModalAction: {

  },
})
//Exportação
export default modificarPesquisa

// Path: AwesomeProject/App.js