// Importação
import { ImageBackgroundComponent, View, Modal } from 'react-native'
import { Text, TextInput, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'
import { useState } from 'react'


//Definição de função
const Relatorio = () => {
  
  return (
    <View style={estilos.view}>
      <Image source={require("../assets/images/grafico_pizza.jpg")} />
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
})
//Exportação
export default Relatorio

// Path: AwesomeProject/App.js