import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./telas/Login"
import RecuperarSenha from "./telas/RecuperarSenha";

const Stack = createStackNavigator();


const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} options={{headerTitle: 'Recuperação de senha'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App