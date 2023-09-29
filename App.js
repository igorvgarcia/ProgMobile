import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./telas/Login"
import RecuperarSenha from "./telas/RecuperarSenha";
import NovaConta from "./telas/NovaConta";
import Home from "./telas/Home";
import NovaPesquisa from "./telas/NovaPesquisa";

const Stack = createStackNavigator();


const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{headerTitle: 'Recuperação de senha'}}/>
        <Stack.Screen name="NovaConta" component={NovaConta} options={{headerTitle: 'Criar nova conta'}}/>
        <Stack.Screen name="Home" component={Home} options={{headerTitle: 'Home'}}/>
        <Stack.Screen name="NovaPesquisa" component={NovaPesquisa} options={{headerTitle: 'Nova Pesquisa'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App