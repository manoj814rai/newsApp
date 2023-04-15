import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {BottomTabComponent} from "./BottomTab";
import HomeScreen from '../screens/HomeScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    const tabData = [
        {
            title: 'Home',
            name: "Home",
            PageComponent: HomeScreen,
            unselectedTabIcon:()=> <Image source={require('../assets/Home0.png')} style={{height: 25, width: 25}}/>,
            selectedTabIcon:() => <Image source={require('../assets/Home1.png')} style={{height: 25, width: 25}}/>,
        },
        {
            title: 'Favourite',
            name: 'Favourite',
            PageComponent: FavouriteScreen,
            unselectedTabIcon:() => <Image source={require('../assets/Like0.png')} style={{height: 25, width: 25}}/>,
            selectedTabIcon:()=> <Image source={require('../assets/Like1.png')} style={{height: 25, width: 25}}/>,
        },
    ];

    const BottomTabs = () => <BottomTabComponent data={tabData} />;
    return (
        <Stack.Navigator
            initialRouteName={"Home"}
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name={"Home"} component={BottomTabs} />
        </Stack.Navigator>
    )
};

const AppRoute = () => {
    return(
        <NavigationContainer>
            <AppNavigator/>
        </NavigationContainer>
    )
}

export default AppRoute