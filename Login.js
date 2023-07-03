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
                />
                <Input 
                    placeholder='Password'
                />
                <Input
                    placeholder='First Name'
                />
                <Input
                    placeholder='Last Name'
                />
                <Input
                    placeholder='Email'
                />
                <CheckBox
                    title='Remember Me'
                />
                <View style={styles.formButton}>
                    <Button 
                        onPress={() => handleRegister()}
                        title='Register'
                    />
                </View>
            </View>
        </ScrollView>
    );
};

const Tab = createBottomTabNavigator();

const LoginScreen = () => {
    const tabBarOptions = {

    };

    return (
        <Tab.Navigator tabBarOptions={tabBarOptions}>
            <Tab.Screen 
                name='Login'
                component={LoginTab}
                options={{
                    tabBarIcon: (props) => {
                        return (
                            <Icon 
                                name='sign-in'
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
                                name='user-plus'
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
});

export default LoginScreen;
