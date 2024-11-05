import { StyleSheet } from "react-native";

export const colors = {
    primary : "#7a00d1",
    primaryPressed: "#9603ff",
}

export const styles = StyleSheet.create({
    containerPressed: {
      flex: 1,
      backgroundColor: colors.primaryPressed,
      justifyContent: 'center',
      alignItems: 'center',
    },  
  container: {
      flex: 1,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#fff',
    },
  });
  