import { Text, StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeScreen = ({ navigation }) => {

    return (
        <ScrollView>
            {/* header */}
            <View style={styles.header}>
                <Image source={require('../assets/avatar.jpg')} style={styles.avatar} />
                <View>
                    <Text>Xin chào!</Text>
                    <Text style={styles.textName}>Long Phúc Lộc</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textInfor}>Hạng vàng</Text>
                        <View>
                            <Text style={[styles.textInfor, { marginLeft: 20, width: 130, paddingLeft: 25 }]}>99,999 pt</Text>
                            <Icon name='wallet' size={25} style={styles.iconWallet} />
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 125, marginLeft: '-75%' }}>
                    <MaterialCommunityIcons name='crown-outline' size={25} />
                    <View style={styles.progress}></View>
                    <MaterialCommunityIcons name='crown-outline' size={25} />
                </View>

                <Image source={require('../assets/barcode.jpg')} style={styles.barcode} />
            </View>

            <View style={styles.options}>
                <Text style={styles.nameOptions}>Tính năng</Text>
                <View style={{ flexDirection: 'row', marginTop: 40, justifyContent: 'space-evenly' }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Icon name='location' size={50} style={[styles.optionsIcon, { backgroundColor: '#F9E795', color: '#F96167' }]} />
                        <Text style={styles.optionsText}>Vị trí</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <Icon name='v-card' size={50} style={[styles.optionsIcon, { backgroundColor: '#E2D1F9', color: '#317773' }]} />
                        <Text style={[styles.optionsText, { maxWidth: '100%' }]}>Thông tin</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { }}>
                        <Feather name='settings' size={50} style={[styles.optionsIcon, { backgroundColor: '#ADD8E6', color: '#00008B' }]} />
                        <Text style={styles.optionsText}>Cài đặt</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.options}>
                <Text style={styles.nameOptions}>Ưu đãi</Text>
                <ScrollView horizontal={true}>
                    <View style={styles.promotions}>
                        <TouchableOpacity onPress={() => { }}>
                            <Image source={require('../assets/promotions/promotion1.jpg')} style={styles.Image} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }}>
                            <Image source={require('../assets/promotions/promotion2.jpg')} style={styles.Image} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }}>
                            <Image source={require('../assets/promotions/promotion3.jpg')} style={styles.Image} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }}>
                            <Image source={require('../assets/promotions/promotion4.jpg')} style={styles.Image} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.options}>
                <Text style={styles.nameOptions}>Trò chơi</Text>
            </View>
        </ScrollView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#EEA47F',
        width: '100%',
        height: 400,
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        flexDirection: 'row',
        paddingTop: 15,
    },
    avatar: {
        height: 100,
        width: 100,
        borderRadius: 100,
        marginLeft: 50,
        marginRight: 20
    },
    textName: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black'
    },
    textInfor: {
        backgroundColor: 'white',
        height: 25,
        borderRadius: 100,
        width: 100,
        textAlign: 'center',
        marginTop: 10,
        color: '#01539D',
        textAlignVertical: 'center'
    },
    iconWallet: {
        position: 'absolute',
        top: 10,
        left: 35,
    },
    options: {
        margin: 25
    },
    nameOptions: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 30,
        borderLeftWidth: 10,
        borderLeftColor: '#EEA47F',
        paddingLeft: 15,
    },
    optionsIcon: {
        width: 80,
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 20
    },
    optionsText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        marginTop: 5
    },
    promotions: {
        flexDirection: 'row',
    },
    Image: {
        width: 250,
        height: 250,
        marginTop: 15,
        marginRight: 30
    },
    barcode: {
        height: 150,
        width: '80%',
        position: 'absolute',
        bottom: 50,
        left: 50,
        borderRadius: 25
    },
    progress: {
        borderWidth: 1,
        borderRadius: 100,
        height: 15,
        width: '55%',
        marginHorizontal: 5,
        marginTop: 7
    },

})