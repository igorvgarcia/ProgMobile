// Importação
import { ImageBackgroundComponent, View } from 'react-native'
import { Text, TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'

//Definição de função
const NovaConta = () => {
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
          <Text style={estilos.FormText}>Repetir Senha</Text>
          <TextInput style={estilos.input} placeholder="Digite novamente a Senha" />
          <Botao tipoBotao="botaoEntrar" texto="Cadastrar" estilos={estilos.botao} estilosTexto={estilos.texto} onPress={() => { alert('Clicou') }} />

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

})
//Exportação
export default NovaConta

// Path: AwesomeProject/App.js