import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image , Text, View, SafeAreaView, TouchableOpacity, Touchable } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LoginScreen from './Login';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


// Currently this app is only designed to get you from the start page to the main page. Once we move on to login and user auth a lot will change

//I also plan to break everything up into their own JS files but I wanted to have everything in front of me at first

const Stack = createNativeStackNavigator();

 const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Main} name="Main" options={{headerShown:false}} />
        
        <Stack.Screen component={LoginScreen} name="Login" options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
 );
}


const Main = ({navigation}) => {
  // return (

    
  // <SafeAreaView style={styles.container}>
      // <View style={{marginTop: 20}}>
      //   <Text style={{fontSize: 30, fontWeight: 'bold', color: '#32CD32'}}>
      //     FitPlanner
      //   </Text>
      // </View>
      // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      //   <Image style={{width: 300, height: 300, transform: [{rotate: '-30deg'}]}} source={require('./src/assets/temppic.png')} />
      // </View>
  //     <TouchableOpacity 
  //       onPress={() => navigation.navigate('Home')}
  //       style={{backgroundColor: '#32CD32', padding: 20, width: '90%', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40
  //               }}>
  //       <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>Get Started</Text>
  //       {/* I cannot get the font above to work. I'm not for sure gonna use it but for some reason I cant link the font assets to the project using npx react-native-assets(can't use react-native-link anymore sadge) */}
  //       <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
  //     </TouchableOpacity>
  //   </SafeAreaView>




  // );
  return (
    <View style={styles.container}>

    {/* Header */}
        <View style={{marginTop: 60}}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#32CD32'}}>
            FitPlanner
          </Text>
      </View>

      {/* Image */ }

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image alt="Weight Lifting Icon by Tulpahn" style={{width: 300, height: 300}} source={require('./src/assets/weight-lifting.png')} />
      </View>

      {/* Home Button */}

      <TouchableOpacity 
        onPress={() => navigation.navigate('Main')}
        //MAIN YET TO BE IMPLEMENTED

        style={{backgroundColor: '#32CD32', padding: 20, width: '90%', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20
                }}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>Home</Text>
        
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>

      {/* Login Button */}

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{backgroundColor: '#32CD32', padding: 20, width: '90%', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40
                }}
      >
        <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>Login/Register</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>


    </View>
  );
}





// const Home = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>
//           You are home
//         </Text>
//       </View>
//       <TouchableOpacity 
//         onPress={() => navigation.navigate('Main')}
//         style={{backgroundColor: '#32CD32', padding: 20, width: '90%', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40
//                 }}>
//         <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>Home</Text>
//         {/* I cannot get the font above to work. I'm not for sure gonna use it but for some reason I cant link the font assets to the project using npx react-native-assets(can't use react-native-link anymore sadge) */}
//         <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => navigation.navigate('Login')}
//         style={{backgroundColor: '#32CD32', padding: 20, width: '90%', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 40
//                 }}
//       >
//         <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>Login</Text>
//         <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
//       </TouchableOpacity>
//     </View>
//   );
// }

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#36454F",
    alignItems: 'center',
    justifyContent: 'center',
  },
});