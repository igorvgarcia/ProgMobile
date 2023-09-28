// Importação
import { ImageBackgroundComponent, View } from 'react-native'
import { Text, TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'

//Definição de função
const novaPesquisa = () => {
  return (
    <View style={estilos.view}>
      <View >
        <View style={estilos.logo}>
          <Logo />
        </View>

        <View style={estilos.FormContainer}>
          <Text style={estilos.FormText}>Nome</Text>
          <TextInput style={estilos.input} placeholder="Digite o nome" />
          <Text style={estilos.FormText}>Data</Text>
          <TextInput style={estilos.input} placeholder="INPUT PARA DATA ALTERAR" />
          <Text style={estilos.FormText}>Imagem</Text>
          <TextInput style={estilos.input} placeholder="INPUT PARA IMAGEM ALTERAR" />
          <Botao tipoBotao="botaoEntrar" texto="CADASTRAR" estilos={estilos.botao} estilosTexto={estilos.texto} onPress={() => { alert('Clicou') }} />

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
export default novaPesquisa

// Path: AwesomeProject/App.js