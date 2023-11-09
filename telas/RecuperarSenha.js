// Importação
import { ImageBackgroundComponent, View } from 'react-native'
import { Text, TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'
import { useState, useContext } from 'react'

//Definição de função
const RecuperarSenha = ({ navigation }) => {
  const [email, setEmail] = useState('')

  const [showError, setChangeShowError] = useState(false)

  function sendForgotPassword() {
    if (verifyEmail()) {
      navigation.push("Login");
    }
    else {
      setChangeShowError(true);
    }
  }

  function verifyEmail() {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  return (
    <View style={estilos.view}>
      <View >
        <View style={estilos.logo}>
          <Logo />
        </View>

        <View style={estilos.FormContainer}>
          <Text style={estilos.FormText}>E-mail</Text>
          <TextInput style={estilos.input} value={email} onChangeText={setEmail} placeholder="Digite seu e-mail" />
          <View style={estilos.wrapperErro}>{showError && <Text style={estilos.erroText}>E-mail inválido.</Text>}</View>
          <Botao tipoBotao="botaoEntrar" texto="RECUPERAR" estilos={estilos.botao} estilosTexto={estilos.texto} onPress={sendForgotPassword} />

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
export default RecuperarSenha

// Path: AwesomeProject/App.js