import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import Bookmark from './screens/bookmark';
import Icon from 'react-native-vector-icons/Ionicons';
import Searching from './screens/searching';
import InputInfo from './screens/input';
const Tab = createBottomTabNavigator();
//알라딘 디비 받아오기



export default function App() {




//로그인 창은 드로우로.

  return (
    <NavigationContainer>
    
    <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Books') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search'){
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Bookmark'){
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            } else if (route.name === 'Input'){
              iconName = focused ? 'book' : 'book-outline';
            } 
            return <Icon name={iconName} size={"20"}  color={"red"}/>;
          },

        })}

        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}>

    <Tab.Screen name="Books" component={Home} />
    <Tab.Screen name="Search" component={Searching} />
    <Tab.Screen name="Bookmark" component={Bookmark} />
    <Tab.Screen name="Input" component={InputInfo} />
  </Tab.Navigator>
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
