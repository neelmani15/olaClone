// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Home from './screens/Home';
import Eletric from './screens/Eletric';
import YourRides from './screens/YourRides';
import OlaMoney from './screens/OlaMoney';
import Profile from './screens/Profile';
import Payments from './screens/Payments';
import About from './screens/About';
import Support from './screens/Support';
import PickUp from './screens/PickUp';
import DestinationScreen from './screens/DestinationScreen';
import DetailScreen from './screens/DetailScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import InviteScreen from './screens/InviteScreen';
import AllInvitesScreen from './screens/AllInvitesScreen';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle:{
          paddingTop:30,
          paddingLeft:10
        },
        drawerHideStatusBarOnOpen: true,
        drawerInactiveTintColor: 'black',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#d4cdcd',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={({ navigation, route }) => ({
          drawerIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          headerShown: false
        })}
      />
      <Drawer.Screen
        name="MyProfile"
        component={Profile}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
          // headerShown: false,
          title: "My Profile"
        }}
      />
      <Drawer.Screen
        name="Electric_Bike"
        component={Eletric}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="bolt" size={size} color={color} />
          ),
          // headerShown: false,
          title: "Electric"
        }}
      />
      <Drawer.Screen
        name="YourRides"
        component={YourRides}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="bicycle" color={color} size={size} />
          ),
          // headerShown: false,
          title: "Your Rides"
        }}
      />
      <Drawer.Screen
        name="OlaMoney"
        component={OlaMoney}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="money-bill" size={size} color={color} />
          ),
          // headerShown: false,
          title: "Ola Money"
        }}
      />
      <Drawer.Screen
        name="Invite"
        component={InviteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="user-friends" size={size} color={color} />
          ),
          headerShown: false,
          title: "Invite Friends"
        }}
      />
      <Drawer.Screen
        name="Payments"
        component={Payments}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="payments" size={size} color={color} />
          ),
          headerShown: false,
          title: "Payments"
        }}
      />
      <Drawer.Screen
        name="Support"
        component={Support}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="support" size={size} color={color} />
          ),
          // headerShown: false,
          title: "Support"
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="infocirlceo" size={24} color="black" />
          ),
          headerShown: false,
          title: "About"
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PickUp"
              component={PickUp}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Destination"
              component={DestinationScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Details"
              component={DetailScreen}
              options={{
                headerShown: false,
              }}
            />
            
            <Stack.Screen
              name="Confirm"
              component={ConfirmScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Invite"
              component={InviteScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="All_Invites"
              component={AllInvitesScreen}
              options={{
                headerShown: false,
              }}
            />
            
          </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
