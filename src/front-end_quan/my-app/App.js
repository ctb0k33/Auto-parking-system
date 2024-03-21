import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ParkingList from './components/ParkingList'; // You'll create this component
import AddEditParking from './components/AddEditParking'; // You'll create this component too

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ParkingList" component={ParkingList} options={{ title: 'Parking Spots' }}/>
        <Stack.Screen name="AddEditParking" component={AddEditParking} options={({ route }) => ({ title: route.params?.parkingId ? 'Edit Parking' : 'Add Parking' })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
