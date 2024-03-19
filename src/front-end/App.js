import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ParkingDetail from "./screens/parking_detail/ParkingDetail";
import { styles } from "./App.style";
export default function App() {
  return (
    <View style={styles.container}>
      <ParkingDetail />
    </View>
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
