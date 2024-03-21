
import ParkingDetail from "./screens/parking_detail/ParkingDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ConnectWallet from "./screens/connect_wallet/ConnectWallet";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ConnectWallet">
        <Stack.Screen name="ConnectWallet" component={ConnectWallet} />
        <Stack.Screen name="ParkingDetail" component={ParkingDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
