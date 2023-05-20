import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import styles from '../style/RegisterStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RegisterScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Icon go back */}
            <TouchableOpacity style={styles.btnGoBack} onPress={() => navigation.goBack()}>
                <Icon name='arrow-left' size={40} color='#EEA47F' />
            </TouchableOpacity>

            {/* name of app */}
            <Text style={styles.name}>Đăng ký</Text>

            {/* form log in */}
            <View style={styles.RegisterForm}>
                {/* Form input */}
                <TextInput style={styles.formInput} placeholder='Tên đăng nhập ' />
                <TextInput style={[styles.formInput, { marginTop: 20 }]} placeholder='Mật khẩu' secureTextEntry />
                <TextInput style={[styles.formInput, { marginTop: 20 }]} placeholder='Nhập lại mật khẩu' secureTextEntry />

                {/* button Register */}
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.textBtn}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RegisterScreen;

