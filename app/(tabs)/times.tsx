import { TimePill } from "@/components/TimePill";
import { styles } from "@/styles";
import { getItem, setItem } from "@/utils/asyncStorage";
import { useEffect, useState } from "react";
import { FlatList, Pressable, Text } from "react-native";
import { View } from "react-native";

type propsType = {
  navigation: any;
};

const AboutScreen = (navigation: any) => {
  const [times, setTimes] = useState([]);

  //setTimes(getItem())

  useEffect(() => {
    getItem("times").then((res) => {
      setTimes(res);
    });
  });

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={times.reverse()}
        contentContainerStyle={{ flexDirection: "column", gap: 5 }}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return <TimePill time={item} />;
        }}
      ></FlatList>

      <Pressable style={styles.timePill} onPress={() => setItem("times", [])}>
        <Text style={styles.text}> DeleteTimes </Text>
      </Pressable>
    </View>
  );
};

export default AboutScreen;
