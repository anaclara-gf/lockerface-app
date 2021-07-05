import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { PickOrder } from '../screens/PickOrder';
import { RegisterOrder } from '../screens/RegisterOrder';
import { RegisterUser } from '../screens/RegisterUser';
import { PickOrderByCode } from '../screens/PickOrderByCode';
import { RegisterUserFace } from '../screens/RegisterUserFace';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: 'transparent'
                    }
                }}
            >
                <Screen 
                    name="Home"
                    component={Home}
                />
                <Screen 
                    name="PickOrder"
                    component={PickOrder}
                />
                <Screen 
                    name="PickOrderByCode"
                    component={PickOrderByCode}
                />
                <Screen 
                    name="RegisterOrder"
                    component={RegisterOrder}
                />
                <Screen 
                    name="RegisterUser"
                    component={RegisterUser}
                />
                <Screen 
                    name="RegisterUserFace"
                    component={RegisterUserFace}
                />
            </Navigator>
        </NavigationContainer>
    )
}