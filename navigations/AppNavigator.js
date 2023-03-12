import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/home/Home.jsx';

import routes from '../configs/routes';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName={routes.HOME} screenOptions={{headerShown: false}}>
            <Stack.Screen name={routes.HOME} component={Home}/>
        </Stack.Navigator>
    );
}

export default AppNavigator;