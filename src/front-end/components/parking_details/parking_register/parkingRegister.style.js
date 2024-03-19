import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: 12,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    gap: 5,
    shadowOpacity: 0.18,
  },
  contract: {
    fontWeight: "bold",
  },
});
