import { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { CheckBox, Input, Button, Icon } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginTab = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleLogin = () => {
        console.log('username:', username);
        console.log('password:', password);
        console.log('remember:', remember);
        if (remember) {
            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({
                    username,
                    password
                })
            ).catch((error) => console.log('Could not save user info', error));
        } else {
            SecureStore.deleteItemAsync('userinfo').catch((error) =>
                console.log('Could not delete user info', error)
            );
        }
    };

    useEffect(() => {
        SecureStore.getItemAsync('userinfo').then((userdata) => {
            const userinfo = JSON.parse(userdata);
            if (userinfo) {
                setUsername(userinfo.username);
                setPassword(userinfo.password);
                setRemember(true);
            }
        });
    }, []);

    return (
        <View style={styles.container} options={{headerShown: false}}>
            <Input 
                placeholder='Username'
                leftIcon={<AntDesign name='user'/>}
                leftIconContainerStyle={styles.formIcon}
                containerStyle={styles.formInput}
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
            <Input 
                placeholder='Password'
                leftIcon={<MaterialCommunityIcons name='onepassword'/>}
                leftIconContainerStyle={styles.formIcon}
                containerStyle={styles.formInput}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <CheckBox
                title='Remember Me'
                center
                checked={remember}
                onPress={() => setRemember(!remember)}
                containerStyle={styles.formCheckbox}
            />
            <View style={styles.formButton}>
                <Button
                    onPress={() => handleLogin()}
                    title='Login'
                    color='#32CD32'
                    icon={
                        <Icon
                            name='assignment-ind'
                        />
                    }
                    buttonStyle={{ backgroundColor: '#32CD32'}}
                />
            </View>
        </View>
    )

};

const RegisterTab = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [remember, setRemember] = useState(false);

    const handleRegister = () => {
        const userInfo = {
            username,
            password,
            firstname,
            lastname,
            email,
            remember
        };
        console.log(JSON.stringify(userInfo));
        if (remember) {
            SecureStore.setItemAsync(
                'userinfo',
                JSON.stringify({
                    username,
                    password
                })
            ).catch((error) => console.log('Could not save uyser info', error));
        } else {
            SecureStore.deleteItemAsync('userinfo').catch((error) => 
                console.log('Could not delete user info',  error)
            );
        }
    };

    return (
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.container}>
                <Input 
                    placeholder='Username'
                    value={username}
                    containerStyle={styles.formIcon}
                    onChangeText={(text) => setUsername(text)}
                />
                <Input 
                    placeholder='Password'
                    value={password}
                    containerStyle={styles.formIcon}
                    onChangeText={(text) => setPassword(text)}
                />
                <Input
                    placeholder='First Name'
                    value={firstname}
                    containerStyle={styles.formIcon}
                    onChangeText={(text) => setFirstName(text)}
                />
                <Input
                    placeholder='Last Name'
                    value={lastname}
                    containerStyle={styles.formIcon}
                    onChangeText={(text) => setLastName(text)}
                />
                <Input
                    placeholder='Email'
                    value={email}
                    containerStyle={styles.formIcon}
                    onChangeText={(text) => setEmail(text)}
                />
                <CheckBox
                    title='Remember Me'
                    center
                    checked={remember}
                    onPress={() => setRemember(!remember)}
                    containerStyle={styles.formCheckbox}
                />
                <View style={styles.formButton}>
                    <Button
                        onPress={() => handleRegister()}
                        title='Register'
                        color='#32CD32'
                        icon={
                            <Icon
                                name='assignment-ind'
                            />
                        }
                        buttonStyle={{ backgroundColor: '#32CD32'}}
                    />
                </View>
            </View>
        </ScrollView>
    </View>
    );
};

const Tab = createBottomTabNavigator();

const LoginScreen = () => {
    const tabBarOptions = {
    /* Input CSS Rules here for the bottom tabs */
    };

    return (
            <Tab.Navigator 
                screenOptions = {({ route }) => ({
                    tabBarStyle: [
                        {
                            display:'flex'
                        },
                        null
                    ],
                tabBarIcon: ({ color }) =>
                screenOptions(route, color),

                })}
            >
                <Tab.Screen 
                    name='LoginTab'
                    component={LoginTab}
                    options={{
                        headerShown: false,
                        tabBarIcon: (props) => {
                            return (
                                <Icon 
                                    name='login'
                                />
                            )
                        }
                    }}
                />
                <Tab.Screen 
                    name='Register'
                    component={RegisterTab}
                    options={{
                        headerShown: false,
                        tabBarIcon: (props) => {
                            return (
                                <Icon
                                    name='app-registration'
                                />
                            )
                        }
                    }}
                />
            </Tab.Navigator>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#36454F",
        alignItems: 'center',
        justifyContent: 'center',
    },
    formButton: {
        
    },
    formIcon: {
        margin: 10,
        paddingTop: 50,
        
        
    },
    formCheckbox: {
        backgroundColor: '#36454F',
        fontWeight: 'bold',
        color: '#00000',
        borderColor: 'black',
        
    }
});

export default LoginScreen;
