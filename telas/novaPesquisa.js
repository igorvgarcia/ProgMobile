// Importação
import { ImageBackgroundComponent, View } from 'react-native'
import { Text, TextInput, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'
import { useState } from 'react'
import { collection, initializeFirestore, addDoc } from 'firebase/firestore'
import { app, storage } from '../src/firebase/config/firebase'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

//Definição de função
const NovaPesquisa = (props) => {

  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [imagem, setImagem] = useState('')
  const [foto, setFoto] = useState()

  const [showError, setChangeShowError] = useState(false)

  const db = initializeFirestore(app, {experimentalForceLongPolling: true})
  const pesquisaCollection = collection(db, "pesquisa")

  async function validarCampos() {
    setChangeShowError(false)
    if(nome == "" || data == "" || imagem == ""){
      setChangeShowError(true)
    }

    const nomeArquivo = (nome + Math.floor(Math.random() * 100).toString() + ".jpeg")
    const imageRef = ref(storage, nomeArquivo)
    const file = await fetch(imagem)
    const blob = await file.blob()

    uploadBytes(imageRef, blob, {contentType: 'image/jpeg'})
      .then(
        (result) => {
          console.log("Sucesso")
          getDownloadURL(imageRef)
            .then(
              (result) => {
                const docPesquisa = {
                  nome: nome, 
                  data: data,
                  imagem: nomeArquivo,
                  imagemUrl: result
                }

                addDoc(pesquisaCollection, docPesquisa)
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


  }

  function addFoto() {
    launchCamera({ mediaType: 'photo', cameraType: 'back', quality: 1 })
      .then(
        (result) => {
          setImagem(result.assets[0].uri)
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
          <TextInput value={nome} onChangeText={setNome} style={estilos.input} placeholder="Digite o nome" />
          <Text style={estilos.FormText}>Data</Text>
          <TextInput value={data} onChangeText={setData} style={estilos.input}  />
          <Text style={estilos.FormText}>Imagem</Text>
          <View style={estilos.wrapperErro}>
            {showError && <Text style={estilos.erroText}>Campos em branco!</Text>}
          </View>

          {
            imagem ? <Image source={{ uri: imagem }} style={{width:'50%', height: '30%'}}></Image> : null
          }

          <Botao tipoBotao="botaoEntrar" texto="ADCIONAR FOTO" estilos={estilos.botao} estilosTexto={estilos.texto} onPress={addFoto} />
          <Botao tipoBotao="botaoEntrar" texto="CADASTRAR" estilos={estilos.botao} estilosTexto={estilos.texto} onPress={validarCampos} />

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
  erroText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
    width: 340,
    textAlign: 'center'
  },


})
//Exportação
export default NovaPesquisa

// Path: AwesomeProject/App.js