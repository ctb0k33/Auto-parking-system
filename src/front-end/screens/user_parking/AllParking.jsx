import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";

const AllParking = ({ navigation }) => {
  const [parkings, setParkings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchParkingData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3000/parking');
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      setParkings(data);
      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchParkingData();
  },[]);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>An error occurred: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={parkings}
        keyExtractor={(item) => item.id}
        
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  parkingItemContainer: {
    borderBottomWidth: 1, // Add a line to separate the items
    borderBottomColor: "#ccc", // Choose a light grey color
    paddingBottom: 10, // Add some space at the bottom of each item
  },
  parkingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  title: {
    flex: 1, // Take up as much space as possible
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 100,
    // You might need to adjust this
  },
  parkingImage: {
    width: "100%", // Make the image take the full width of the row
    height: 250, // Adjust the height to your preference
    resizeMode: "cover", // Cover the area without stretching the image
  },
});

export default AllParking;
