import { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { CheckBox, Input, Button, Icon } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
        <View style={styles.container}>
            <Input 
                placeholder='Username'
            />
            <Input 
                placeholder='Password'
            />
            <CheckBox 
                title='Remember Me'
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
        <ScrollView>
            <View style={styles.container}>
                <Input 
                    placeholder='Username'
                    value={username}
                    containerStyle={styles.formIcon}
                />
                <Input 
                    placeholder='Password'
                    value={password}
                    containerStyle={styles.formIcon}
                />
                <Input
                    placeholder='First Name'
                    value={firstname}
                    containerStyle={styles.formIcon}
                />
                <Input
                    placeholder='Last Name'
                    value={lastname}
                    containerStyle={styles.formIcon}
                />
                <Input
                    placeholder='Email'
                    value={email}
                    containerStyle={styles.formIcon}
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
    );
};

const Tab = createBottomTabNavigator();

const LoginScreen = () => {
    const tabBarOptions = {
    /* Input CSS Rules here for the bottom tabs */
    };

    return (
            <Tab.Navigator tabBarOptions={tabBarOptions}>
                <Tab.Screen 
                    name='LoginTab'
                    component={LoginTab}
                    options={{
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

    }
});

export default LoginScreen;
