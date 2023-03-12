import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";

import AppContext from "./context";
import {auth} from './configs/firebase';

import AuthNavigator from "./navigations/AuthNavigator";
import AppNavigator from "./navigations/AppNavigator";

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <AppContext.Provider value={{auth, user, setUser}}>
            <NavigationContainer>
                <StatusBar style={"light"}/>
                {user ? <AppNavigator/> : <AuthNavigator/>}
            </NavigationContainer>
        </AppContext.Provider>
    );
}

export default App;
