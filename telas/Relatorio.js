// Importação
import { ImageBackgroundComponent, View, Modal } from 'react-native'
import { Text, TextInput, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'
import { useState } from 'react'
import { PieChart } from 'react-native-svg-charts'


//Definição de função
const Relatorio = () => {
  
  const data = [
    {
        key: 1,
        value: 50,
        svg: { fill: '#600080' },
        arc: { outerRadius: '130%', cornerRadius: 10,  }
    },
    {
        key: 2,
        value: 50,
        svg: { fill: '#9900cc' }
    },
    {
        key: 3,
        value: 40,
        svg: { fill: '#c61aff' }
    },
    {
        key: 4,
        value: 95,
        svg: { fill: '#d966ff' }
    },
    {
        key: 5,
        value: 35,
        svg: { fill: '#ecb3ff' }
    }
  ]

  return (
    <View >
      <PieChart
          style={{ height: 200 }}
          outerRadius={'70%'}
          innerRadius={10}
          data={data}
      />
    </View>
  )

}


//Exportação
export default Relatorio

// Path: AwesomeProject/App.js