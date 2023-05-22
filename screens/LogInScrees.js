import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../style/LogInStyle';

const LogInScreens = ({ navigation }) => {

    const [showPassword, setShowPassword] = useState(false)

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
                    <TextInput style={[styles.formInput, { marginTop: 20 }]} placeholder='Mật khẩu' secureTextEntry={!showPassword} />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Icon name={showPassword ? 'eye' : 'eye-off'} size={30} style={styles.icon} />
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
                <Icon name='phone-call' size={40} style={styles.iconPhone} />
            </TouchableOpacity>
        </View>
    )
}

export default LogInScreens;

