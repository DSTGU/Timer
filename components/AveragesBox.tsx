import { styles } from "@/styles";
import { getItem } from "@/utils/asyncStorage";
import { calculateAverage, calculateMean, formatTime } from "@/utils/calc";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

type propsType = {
  update: boolean;
};

const AveragesBox = (props: propsType) => {
  const [times, setTimes] = useState<Array<number>>([]);
  useEffect(() => {
    getItem("times").then((res) => setTimes(res));
  }, [props.update]);

  return (
    <View>
      <Text style={styles.text}>
        Average:
        {formatTime(calculateMean(times, 5))}
      </Text>
    </View>
  );
};

export default AveragesBox;
