// Importação
import { ImageBackgroundComponent, View, Modal } from 'react-native'
import { Text, TextInput, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'
import { useState } from 'react'

//Definição de função
const modificarPesquisa = () => {

  const [modalVisible, setModalVisible] = useState(false);

  function excluirPesquisa() {

  }
  
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
          <TextInput style={estilos.input}  />
          <Text style={estilos.FormText}>Imagem</Text>
          <TextInput style={estilos.input}/>
          <Botao tipoBotao="botaoEntrar" texto="SALVAR" estilos={estilos.botao} estilosTexto={estilos.texto} onPress={() => { alert('Clicou') }} />
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