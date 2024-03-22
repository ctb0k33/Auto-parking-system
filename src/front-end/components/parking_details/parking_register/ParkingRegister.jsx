import { useState } from "react";
import { View, Text, Button, Alert, Pressable, TextInput } from "react-native";
import { Modal } from "../../common/Modal";
import { styles } from "./parkingRegister.style";
import { set } from "mongoose";

// function onPressLearnMore() {
//   Alert.alert(
//     "Are you sure to register this parking?",
//     "By doing that, you will sign a contract with the parking owner.",
//     [
//       {
//         text: "Cancel",
//         onPress: () => console.log("Button Huỷ bỏ đã được nhấn"),
//         style: "cancel",
//       },
//       {
//         text: "Agree",
//         onPress: () => console.log("Button Đồng ý đã được nhấn"),
//       },
//     ],
//     { cancelable: false }
//   );
// }

export default function ParkingRegister({ contractId }) {
  const [modalState, setModalState] = useState(false);
  const [fund, setFund] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.contract}>Parking Register</Text>
      <View>
        <Text style={styles.contract}>Contract ID: </Text>
        <Text>{contractId}</Text>
      </View>
      <Button
        onPress={() => {
          setModalState(true);
        }}
        title="Register"
        color="green"
        accessibilityLabel="Learn more about this purple button"
      />
      <Modal isOpen={modalState}>
        <View style={styles.modal}>
          <Text>Register</Text>
          <Text>
            Contract Id: <Text>{contractId}</Text>
          </Text>
          <Text>
            Add fund:
          </Text>
          <TextInput
              style={{ height: 40, borderColor: "red", borderWidth: 3 }}
              onChangeText={setFund}
              value={fund}
              placeholder="Enter text here..."
              keyboardType="numeric"
            />
          <Pressable onPress={() => setModalState(false)}>
            <Text>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
}
