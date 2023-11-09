import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import { useContext } from 'react'
import { Text, StyleSheet, Image, Pressable, View } from 'react-native'
import ContextManager from '../telas/shared/dataContext'

import Home from '../telas/Home';

const Drawer = createDrawerNavigator();

const DrawerApp = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={({ navigation }) => {
      return {
        headerShown: true,
        headerTitleStyle: {
          ...estilos.headerTitle
        },
        headerStyle: {
          ...estilos.headerTitleWrapper
        },
        drawerActiveBackgroundColor: null,
        drawerActiveTintColor: "#FFFFFF",
        drawerInactiveTintColor: "#FFFFFF",
        drawerItemStyle: { display: "flex", marginVertical: 0},
        drawerLabelStyle: {
          fontFamily: 'AveriaLibre-Regular',
          fontSize: 22,
          marginLeft: 0
        },
        headerLeft: ({ }) => {
          return (
            <Pressable onPress={navigation.toggleDrawer}>
              <Image onPress={navigation.toggleDrawer} style={estilos.imageHeader} source={require("../assets/images/icone3.png")}></Image>
            </Pressable>
          )
        }
      }
    }} drawerContent={(props) => <DrawerItems {...props} />}>
      <Drawer.Screen options={{
        title: "Pesquisas", drawerIcon: () => (
          <Image source={require("../assets/images/icone1.png")} style={{ width: 30, height: 30, marginRight: -25 }}></Image>
        )
      }} name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

const DrawerItems = (props) => {
  const context = ContextManager.instance;

  const userName = context.loggedUser ? context.loggedUser.email : "Usuário"
  function logout() {
    props.navigation.navigate('Login')
  }
  return (
    <DrawerContentScrollView {...props} style={estilos.body}>
      <View style={estilos.drawerWrapper}>
        <Text style={estilos.drawerUserName}>{userName}</Text>
      </View>
      <View>
        <DrawerItemList {...props}></DrawerItemList>
        <View style={{ display: "flex" }}>
          <DrawerItem label="Sair" onPress={logout} 

          labelStyle={{
            fontFamily: 'AveriaLibre-Regular',
            fontSize: 22,
            marginLeft: 0,
            color: "#FFFFFF",
            marginTop: 500
          }} icon={() => (
            <Image source={require("../assets/images/icone2.png")} style={{ width: 30, height: 30, marginRight: -25, marginTop: 500 }}></Image>
          )}></DrawerItem>
        </View>
      </View>
    </DrawerContentScrollView>
  )
}


const estilos = StyleSheet.create({
  headerTitleWrapper: {
    backgroundColor: '#372775'
  },
  headerTitle: {
    color: '#372775'
  },
  imageHeader: {
    height: 30,
    width: 50,
    alignSelf: 'center',
    marginLeft: 10
  },
  body: {
    height: '100%',
    backgroundColor: '#372775'
  },
  drawerWrapper: {
    display: "flex",
    height: 80,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    borderBottomColor: "#FFFFFF",
    borderBottomWidth: 2,
    marginBottom: 30,
    marginTop: 5
  },
  drawerUserName: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre',
    textAlign: "center",
  }
})

export default DrawerApp;