// Importação
import { ImageBackgroundComponent, View } from 'react-native'
import { Text, TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'
import { useState } from 'react'
import { collection, initializeFirestore, addDoc } from 'firebase/firestore'
import { app } from '../src/firebase/config/firebase'

//Definição de função
const NovaPesquisa = () => {

  const [nome, setNome] = useState('')
  const [data, setData] = useState('')
  const [imagem, setImagem] = useState('')

  const [showError, setChangeShowError] = useState(false)

  const db = initializeFirestore(app, {experimentalForceLongPolling: true})
  const pesquisaCollection = collection(db, "pesquisa")

  function validarCampos() {
    setChangeShowError(false)
    if(nome == "" || data == "" || imagem == ""){
      setChangeShowError(true)
    }

    const docPesquisa = {
      nome: nome, 
      data: data
    }

    addDoc(pesquisaCollection, docPesquisa)
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
          <TextInput value={imagem} onChangeText={setImagem} style={estilos.input}  />
          <View style={estilos.wrapperErro}>
            {showError && <Text style={estilos.erroText}>Campos em branco!</Text>}
          </View>
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