import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    title: "Get a Ride",
    image: require("../assets/get_a_ride.png"),
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "Grab a Food",
    image: require("../assets/grab_a_food.png"),
    screen: "FoodScreen",
  },
];

const navOptions = () => {
  const Navigation = useNavigation();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => Navigation.navigate(item.screen)}
          style={tw`p-3 m-3 rounded-sm shadow-sm`}
        >
          <View>
            <Image
              style={{
                width: 90,
                height: 50,
                resizeMode: "contain",
                alignSelf: "center",
              }}
              source={item.image}
            />
            <Text style={[tw`text-black font-bold py-2 text-center`, ""]}>
              {item.title}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default navOptions;
