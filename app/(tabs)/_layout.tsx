import { Tabs } from "expo-router";
import { Icon } from "@rneui/themed";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Timer",
          tabBarIcon: ({ color, focused }) => {
            return (
              <Icon
                name="stopwatch"
                type="font-awesome-5"
                solid
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="times"
        options={{
          title: "Times",
          tabBarIcon: ({ color, focused }) => {
            return (
              <Icon
                name="clipboard"
                type="font-awesome-5"
                solid
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => {
            return <Icon name="cog" type="font-awesome-5" color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
