import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Foundation, FontAwesome } from "@expo/vector-icons";

import { HomeCharacterStack, TimeLineScreen, SettingScreen } from ".";
import tabBar from "../../assets/tab_bar.png";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          height: 80,
        },
        tabBarLabelStyle: { paddingBottom: 10 },
        tabBarBackground: () => <Image source={tabBar} />,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="HomeCharacter"
        component={HomeCharacterStack}
        options={{
          headerShown: false,
          title: "ホーム",
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TimeLine"
        component={TimeLineScreen}
        options={{
          title: "タイムライン",
          tabBarIcon: ({ color }) => (
            <Foundation name="clock" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: "設定",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gear" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
