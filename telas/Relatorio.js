// Importação
import { ImageBackgroundComponent, View, Modal } from 'react-native'
import { Text, TextInput, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'
import { useState, useEffect } from 'react'
import { PieChart } from 'react-native-svg-charts'

import { collection, initializeFirestore, addDoc, query, onSnapshot } from 'firebase/firestore'
import { app, storage } from '../src/firebase/config/firebase'

//Definição de função
const Relatorio = () => {

  const db = initializeFirestore(app, {experimentalForceLongPolling: true})
  const pesquisaCollection = collection(db, "pesquisa")

  const [listaPesquisas, setListaPesquisas] = useState([])
  const [data, setData] = useState([])

  useEffect( () => {
    const q = query(pesquisaCollection)

    const unSubscribe = onSnapshot(q, (snapshot) => {
        const pesquisas = []
        snapshot.forEach( (doc) => {
            pesquisas.push({
                id: doc.id,
                ...doc.data()
            })
        })
        console.log(pesquisas)
        setListaPesquisas(pesquisas)

        const somaTotal = {
          bom: 0,
          excelente: 0,
          neutro: 0,
          pessimo: 0,
          ruim: 0,
        };
    
        pesquisas.forEach(p => {
          somaTotal.pessimo += p.coleta.pessimo;
          somaTotal.ruim += p.coleta.ruim;
          somaTotal.neutro += p.coleta.neutro;
          somaTotal.bom += p.coleta.bom;
          somaTotal.excelente += p.coleta.excelente;
        })
    
        console.log("-----------------------------")
        console.log(somaTotal)
        console.log("-----------------------------")

        setData([
          {
              key: 1,
              value: somaTotal.pessimo,
              svg: { fill: 'red' },
              label: 'Pessimo',
              color: 'red'
          },
          {
              key: 2,
              value: somaTotal.ruim,
              svg: { fill: 'yellow' },
              label: 'Ruim',
              color: '#FFD700'
          },
          {
              key: 3,
              value: somaTotal.neutro,
              svg: { fill: 'grey' },
              label: 'Neutro',
              color: 'grey'
          },
          {
              key: 4,
              value: somaTotal.bom,
              svg: { fill: 'blue' },
              label: 'Bom',
              color: 'blue'
          },
          {
              key: 5,
              value: somaTotal.excelente,
              svg: { fill: 'green' },
              label: 'Excelente',
              color: 'green'
          }
        ])
    })





  }, []) 

  const chartKey = data.map(item => item.key).join(',');

  return (
    <View >
      <PieChart
          style={{ height: 200 }}
          outerRadius={'70%'}
          innerRadius={10}
          data={data}
          key={chartKey}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {data.map(item => (
          <Text key={item.key} style={{ color: item.color, marginHorizontal: 8 }}>
            {item.label}
          </Text>
        ))}
      </View>
    </View>
  )

}


//Exportação
export default Relatorio

// Path: AwesomeProject/App.js