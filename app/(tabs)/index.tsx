import { Text, View, StyleSheet, Pressable } from "react-native";
import { styles } from "@/styles";
import { useEffect, useState } from "react";
import { getItem, removeItem, setItem } from "@/utils/asyncStorage";
import { formatTime } from "@/utils/calc";
import AveragesBox from "@/components/AveragesBox";

const UPDATE_DELAY = 17;

const saveTime = async (time: number) => {
  console.log("times:");
  const times = await getItem("times");

  if (!times) {
    const timeItem = [];
    timeItem.push(Math.floor(time / 10));

    await setItem("times", timeItem);
    return;
  }

  times.push(time);
  await setItem("times", times);
};

export default function TimerScreen() {
  const [holdIgnore, setHoldIgnore] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [averages, setAverages] = useState([0]);

  useEffect(() => {
    let interval: any;

    if (running) {
      interval = setInterval(() => {
        setTime(Date.now() - startTime);
      }, UPDATE_DELAY);

      setStartTime(Date.now());
    } else {
      clearInterval(interval);
      setTime(Date.now() - startTime);
    }

    return () => clearInterval(interval);
  }, [startTime, running]);

  const updateAverages = async () => {
    const times = await getItem("times");
    if (!times) {
      setAverages([]);
      return;
    }

    setAverages([
      times.reduce(
        (sum: number, currentValue: number) => sum + currentValue,
        0
      ) / times.length,
    ]);
  };

  return (
    <Pressable
      onPressIn={() => {
        setPressed(true);
        if (running) {
          setRunning(false);
          setHoldIgnore(true);
          saveTime(time);
          updateAverages();
        }
      }}
      onPressOut={() => {
        setPressed(false);
        if (!running) {
          if (holdIgnore) {
            setHoldIgnore(false);
          } else {
            setRunning(true);
          }
        }
      }}
      style={pressed ? styles.containerPressed : styles.container}
    >
      <Text style={styles.mainText}>{formatTime(time)}</Text>

      <AveragesBox update={pressed} />
    </Pressable>
  );
}
