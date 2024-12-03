import { Text, View, StyleSheet, Pressable } from "react-native";
import { styles } from "@/styles";
import { useEffect, useRef, useState } from "react";
import { getItem, removeItem, setItem } from "@/utils/asyncStorage";
import { formatTime } from "@/utils/calc";
import AveragesBox from "@/components/AveragesBox";

const UPDATE_DELAY = 17;

export default function TimerScreen() {
  const [holdIgnore, setHoldIgnore] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [scramble, setScramble] = useState("abcd");
  const firstUpdate = useRef(true);

  const saveTime = async () => {
    const times = await getItem("times");

    console.log(time);
    if (!times) {
      const timeItem = [];
      timeItem.push(Math.floor(time / 10));

      await setItem("times", timeItem);
      return;
    }

    times.push(time);
    await setItem("times", times);
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    let interval: any;
    console.log("doing");
    if (running) {
      interval = setInterval(() => {
        setTime(Date.now() - startTime);
      }, UPDATE_DELAY);
      console.log("running");
      setStartTime(Date.now());

      // randomScrambleForEvent("333").then((res) => {
      //   setScramble(res.toString());
      // });
    } else {
      clearInterval(interval);
      setTime(Date.now() - startTime);
      saveTime();
    }

    return () => clearInterval(interval);
  }, [startTime, running]);

  return (
    <Pressable
      onPressIn={() => {
        setPressed(true);
        if (running) {
          setRunning(false);
          setHoldIgnore(true);
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
      style={
        running
          ? styles.containerRunning
          : pressed
          ? styles.containerPressed
          : styles.container
      }
    >
      {!running && (
        <View style={styles.box}>
          <Text style={styles.text}> {scramble} </Text>
        </View>
      )}
      <Text style={styles.mainText}>{formatTime(time)}</Text>

      {!running && <AveragesBox update={pressed} />}
    </Pressable>
  );
}
