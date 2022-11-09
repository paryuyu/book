import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import Bookmark from './screens/bookmark';
import Icon from 'react-native-vector-icons/Ionicons';
import Searching from './screens/searching';
import InputInfo from './screens/input';
import { BookmarkContextProvider } from './context/bookmarkContext';
const Tab = createBottomTabNavigator();
//알라딘 디비 받아오기


export default function App() {



  //로그인 창은 드로우로.

  return (
    <BookmarkContextProvider>
      <NavigationContainer>

        <Tab.Navigator>

          <Tab.Screen name="Books" component={Home} options={{
            tabBarIcon: ({focused}) => {
              return <Icon name={focused ? "book" : "book-outline"} size={20}></Icon>
            }
            , tabBarActiveTintColor:"red", tabBarInactiveTintColor:"grey"}} />
          <Tab.Screen name="Search" component={Searching} options={{
            tabBarIcon: ({focused}) => {
              return <Icon name={focused ? "search" : "search-outline"} size={20}></Icon>
            }
            , tabBarActiveTintColor:"red", tabBarInactiveTintColor:"grey"}}/>
          <Tab.Screen name="Bookmark" component={Bookmark} options={{
            tabBarIcon: ({focused}) => {
              return <Icon name={focused ? "bookmarks" : "bookmarks-outline"} size={20}></Icon>
            }
            , tabBarActiveTintColor:"red", tabBarInactiveTintColor:"grey"}}/>
          <Tab.Screen name="Input" component={InputInfo} options={{
            tabBarIcon: ({focused}) => {
              return <Icon name={focused ? "library" : "library-outline"} size={20}></Icon>
            }
          , tabBarActiveTintColor:"red", tabBarInactiveTintColor:"grey"}} />
        </Tab.Navigator>
      </NavigationContainer>
    </BookmarkContextProvider>
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
