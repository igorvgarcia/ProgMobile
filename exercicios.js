import { StyleSheet, View } from 'react-native'

const App = () => {
    return (
        <View style={estilos.container}>
            <View style={{ width: 100, height: 100, backgroundColor: 'red' }}></View>
            <View style={{ width: 100, height: 100, backgroundColor: 'blue' }}></View>
            <View style={{ width: 100, height: 100, backgroundColor: 'green' }}></View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink',
        flexDirection: 'row',
    }
})

export default App