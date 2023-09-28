//importaçao
import { TouchableOpacity, Text, StyleSheet } from "react-native";

//Definição de função
const Botao = (props) => {
    const texto = props.texto
    const tipoBotao = props.tipoBotao
    if (tipoBotao == "botaoCriar") {
        return (
            <TouchableOpacity style={estilos.botaoCriar} onPress={props.onPress}>
                <Text style={estilos.texto}>{texto}</Text>
            </TouchableOpacity>
        )
    }
    if (tipoBotao == "botaoEsqueci") {
        return (
            <TouchableOpacity style={estilos.botaoEsqueci} onPress={props.onPress}>
                <Text style={estilos.texto}>{texto}</Text>
            </TouchableOpacity>
        )
    }
    if (tipoBotao == "botaoEntrar") {
        return (
            <TouchableOpacity style={estilos.botaoEntrar} onPress={props.onPress}>
                <Text style={estilos.texto}>{texto}</Text>
            </TouchableOpacity>
        )
    }




    return (
        <TouchableOpacity style={estilos.botao} onPress={props.onPress}>
            <Text style={estilos.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    botao: {
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#37BD6D',
        padding: 10,
        marginTop: 20,
        width: '100%',


    },
    botaoEntrar: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#37BD6D',
        padding: 10,
        marginTop: 20,
        width: '100%',

    },
    botaoEsqueci: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B0CCDE',
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        width: '100%',

    },
    botaoCriar: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#419ED7',
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        
        },
    texto: {
        color: 'white',
        fontSize: 15,

        fontFamily: 'AveriaLibre-Regular',
    }
})

//Exportação
export default Botao