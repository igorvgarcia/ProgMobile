import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./telas/Login"
import RecuperarSenha from "./telas/RecuperarSenha";
import novaConta from "./telas/novaConta";
import Home from "./telas/Home";
import novaPesquisa from "./telas/novaPesquisa";
import Drawer from "./telas/Drawer";
import modificarPesquisa from "./telas/modificarPesquisa";
import AcoesPesquisa from "./telas/AcoesPesquisa";
import Relatorio from "./telas/Relatorio";
import Coleta from "./telas/Coleta";
import AgradecimentoParticipacao from "./telas/AgradecimentoParticipacao";
import { Provider } from "react-redux"
import { store } from "./telas/shared/redux/store"

const Stack = createStackNavigator();


const App = () => {

  //definição do componente
  const App = ({ navigation }) => {

  }

  return (

    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{headerTitle: 'Recuperação de senha'}}/>
          <Stack.Screen name="NovaConta" component={novaConta} options={{headerTitle: 'Criar nova conta'}}/>
          <Stack.Screen name="Home" component={Home} options={{headerTitle: 'Home'}}/>
          <Stack.Screen name="NovaPesquisa" component={novaPesquisa} options={{headerTitle: 'Nova Pesquisa'}}/>
          <Stack.Screen name="Drawer" component={Drawer} options={{headerShown: false}}/>
          <Stack.Screen name="modificarPesquisa" component={modificarPesquisa} options={{headerTitle: 'Modificar Pesquisa'}}/>
          <Stack.Screen name="Relatorio" component={Relatorio} options={{headerTitle: 'Relatorio'}}/>
          <Stack.Screen name="AcoesPesquisa" component={AcoesPesquisa} options={{headerTitle: 'Acoes Pesquisa'}}/>
          <Stack.Screen name="Coleta" component={Coleta} options={{headerTitle: 'Coleta'}}/>
          <Stack.Screen name="AgradecimentoParticipacao" component={AgradecimentoParticipacao} options={{headerTitle: 'Coleta'}}/>

        </Stack.Navigator>
      </NavigationContainer>

    </Provider>
  )
}

export default App