import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/auth/Login';
import Registration from "../screens/auth/Registration";

import routes from '../configs/routes';

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={routes.LOGIN} screenOptions={{headerShown: false}}>
            <Stack.Screen name={routes.LOGIN} component={Login}/>
            <Stack.Screen name={routes.REGISTRATION} component={Registration}/>
        </Stack.Navigator>
    );
}

export default AuthNavigator;