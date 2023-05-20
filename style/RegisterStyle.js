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
        bottom: 50
    },
    RegisterForm: {
        backgroundColor: 'white',
        height: 400,
        width: 350,
        alignItems: 'center',
        paddingTop: 40
    },
    formInput: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 100,
        paddingLeft: 15,
        width: '80%',
        marginTop: 20
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
    btnGoBack: {
        position: 'absolute',
        top: 20,
        left: 20
    }
})

export default styles;