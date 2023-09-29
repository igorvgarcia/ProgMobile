// Importação
import { ImageBackgroundComponent, View } from 'react-native'
import { Text, TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'

//Definição de função
const Login = (props) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const goToRecuperarSenha = () => {
        props.navigation.navigate('RecuperarSenha')
    }

    const goToNovaConta = () => {
        props.navigation.navigate('NovaConta')
    }

    const goToHome = () => {
        props.navigation.navigate('Home')
    }
    

  return (
    <View style={estilos.view}>
      <View >
        <View style={estilos.logo}>
          <Logo />
        </View>

        <View style={estilos.FormContainer}>
          <Text style={estilos.FormText}>E-mail</Text>
          <TextInput style={estilos.input} placeholder="Digite seu e-mail" />
          <Text style={estilos.FormText}>Senha</Text>
          <TextInput style={estilos.input} placeholder="Digite sua senha" />
          <Botao tipoBotao="botaoEntrar" texto="Entrar" estilos={estilos.botao} estilosTexto={estilos.texto} onPress={goToHome} />

        </View>
        
        <View >
          <Botao tipoBotao="botaoCriar" texto="Criar minha conta" onPress={goToNovaConta} />
          <Botao tipoBotao="botaoEsqueci" texto="Esqueci minha senha" onPress={goToRecuperarSenha} />
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
    flex: 1,
  },
  FormContainer: {
    flex: 6,
    justifyContent: 'center',
    borderRadius: 5,
    width: 350,
  },
  FormText: {
    fontSize: 20,
    color: 'white',
    margin: 6,
    width: '100%',

    fontFamily: 'AveriaLibre-Bold'
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
  BotaoInf: {
  

  },

})


//Exportação
export default Login

// Path: AwesomeProject/App.js