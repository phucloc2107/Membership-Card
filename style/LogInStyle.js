import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#01539D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        color: '#EEA47F',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 35,
        bottom: 100
    },
    loginForm: {
        backgroundColor: 'white',
        height: 350,
        width: 350,
        alignItems: 'center',
    },
    logo: {
        height: 100,
        width: 100,
        position: 'absolute',
        top: -50
    },
    formName: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 70
    },
    formInput: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 100,
        paddingLeft: 15,
        width: '80%',
        marginTop: 20
    },
    icon: {
        position: 'absolute',
        top: 30,
        right: 10,
    },
    btn: {
        marginTop: 25,
        backgroundColor: '#EEA47F',
        width: '80%',
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
    },
    formRegister: {
        flexDirection: 'row',
        marginVertical: 10
    },
    btnRegister: {
        marginLeft: 10
    },
    textRegister: {
        fontWeight: 'bold',
        color: '#EEA47F',
        fontSize: 18,
        textDecorationLine: 'underline'
    },
    btnForgotPassword: {
        fontSize: 18,
        color: '#EEA47F',
        textDecorationLine: 'underline'
    },
    btnPhone: {
        position: 'absolute',
        bottom: 70,
        right: 50,
        borderWidth: 1,
        borderRadius: 100,
        width: 90,
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    iconPhone: {
        color: '#01539D',
    }
})

export default styles;