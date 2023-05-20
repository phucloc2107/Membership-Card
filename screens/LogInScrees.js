import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import styles from '../style/LogInStyle';

const LogInScreens = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* name of app */}
            <Text style={styles.name}>Membership Card</Text>

            {/* form log in */}
            <View style={styles.loginForm}>
                {/* Logo */}
                <Image source={require('../assets/logo.png')} style={styles.logo} />

                <Text style={styles.formName}>Đăng Nhập</Text>
                {/* Form input */}
                <TextInput style={styles.formInput} placeholder='Tên đăng nhập' />
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={[styles.formInput, { marginTop: 20 }]} placeholder='Mật khẩu' secureTextEntry />
                    <TouchableOpacity>
                        <Icon name='eye' size={35} style={styles.icon} />
                    </TouchableOpacity>
                </View>

                {/* button Login */}
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textBtn}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>

            {/* register */}
            <View style={styles.formRegister}>
                <Text style={{ color: '#EEA47F', fontSize: 18 }}>Bạn chưa có tài khoản?</Text>
                <TouchableOpacity style={styles.btnRegister} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.textRegister}>Đăng ký ngay</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity>
                <Text style={styles.btnForgotPassword}>Quên mật khẩu</Text>
            </TouchableOpacity>

            {/* Icon service hotline */}
            <TouchableOpacity style={styles.btnPhone} onPress={() => Alert.alert(
                'Please call:',
                '(+84).. ... ..',
            )}>
                <Feather name='phone-call' size={40} style={styles.iconPhone} />
            </TouchableOpacity>
        </View>
    )
}

export default LogInScreens;

