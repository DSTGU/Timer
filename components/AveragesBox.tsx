import { styles } from "@/styles";
import { getItem } from "@/utils/asyncStorage";
import { calculateAverage, calculateMean, formatTime } from "@/utils/calc";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const AveragesBox = () => {
  const [times, setTimes] = useState<[number]>([0]);
  useEffect(() => {
    getItem("times").then((res) => setTimes(res));
  });

  return (
    <View>
      <Text style={styles.text}>
        {" "}
        Average: {formatTime(calculateMean(times, 5))}{" "}
      </Text>
    </View>
  );
};

export default AveragesBox;
