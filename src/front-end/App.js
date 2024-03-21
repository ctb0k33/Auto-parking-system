import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Qr from "./screens/qr/Qr";
import { styles } from "./App.style";
import ConnectWallet from "./screens/connect_wallet/ConnectWallet";
export default function App() {
  return (
    <View style={styles.container}>
        <ConnectWallet />
    </View>
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <ParkingDetail />
//     </View>
  );
}

// export default function App() {
//   return (
//     <SafeAreaView>
//       <Qr />
//     </SafeAreaView>

//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
