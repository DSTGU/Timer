import { TimePill } from "@/components/TimePill";
import { styles } from "@/styles";
import { getItem } from "@/utils/asyncStorage";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
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
  }, [navigation]);

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
    </View>
  );
};

export default AboutScreen;
