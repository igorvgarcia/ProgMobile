// Importação
import { ImageBackgroundComponent, View } from 'react-native'
import { Text, TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import Botao from '../src/components/Botao'
import Logo from '../src/components/Logo'
import { useState, useContext } from 'react'
import ContextManager from '../telas/shared/dataContext';
import { getFirestore, collection, addDoc, initializeFirestore } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth_mod } from '../src/firebase/config/firebase';

import app from '../src/firebase/config/firebase';

//Definição de função
const NovaConta = ({ navigation }) => {

  const addUsuario = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth_mod, email, senha);
      const user = userCredential.user;
  
      console.log("Usuário criado com sucesso", JSON.stringify(user));
  
      // Agora, você pode adicionar user.uid, user.email, etc., ao Firestore se necessário.
    } catch (error) {
      console.log("Erro ao criar usuário", JSON.stringify(error));
    }
  };
  



  const cadastrarConta = async () => {
    if (senha != senhaRepetida) {
      setSenhaNotEqualError(true);
      return false;
    }
    if (verifyEmail()) {
      try {
        await addUsuario();

      } catch (error) {
        console.error("Erro ao adicionar o usuário:", error);
      }
    } else {
      setChangeShowError(true);
    }
  };

  function verifyEmail() {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  const [nomeCompleto, setNomeCompleto] = useState(null);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [senhaRepetida, setSenhaRepetida] = useState(null)

  const [showSenhaNotEqualError, setSenhaNotEqualError] = useState(false)
  const [showError, setChangeShowError] = useState(false)

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
          <Text style={estilos.FormText}>Senha</Text>
          <TextInput style={estilos.input} value={senha} onChangeText={setSenha} secureTextEntry={true} placeholder="Digite sua senha" />
          <Text style={estilos.FormText}>Repetir Senha</Text>
          <TextInput style={estilos.input} value={senhaRepetida} onChangeText={setSenhaRepetida} secureTextEntry={true} placeholder="Digite novamente a Senha" />
          <View style={estilos.wrapperErro}>{showSenhaNotEqualError && <Text style={estilos.erroText}>Campos de senha não correspondem.</Text>}</View>


          <Botao onPress={cadastrarConta} tipoBotao="botaoEntrar" texto="Cadastrar" estilos={estilos.botao} estilosTexto={estilos.texto} />

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
export default NovaConta

// Path: AwesomeProject/App.js