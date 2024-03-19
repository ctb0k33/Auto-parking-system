import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./parkingDetailImage.style";
import { Text, View, Image } from "react-native";

export default function ParkingDetailImage({ name, images }) {
  const images1 = require("../../../assets/images/nha_xe_dhqg.jpg");
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.mainImage} source={images1} />
        <Text style={styles.parkingName}>{name}</Text>
      </View>
    </SafeAreaView>
  );
}
