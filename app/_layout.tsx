import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  useFonts,
} from "@expo-google-fonts/montserrat";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) return null;
  return (
    //<Stack.Screen name="index" options={{ headerShown: false }} />
    <Stack
      screenOptions={{
        //set default here
        title: "User App",
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "black",
        },
        contentStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "User App",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "black",
          },
        }}
      />
      <Stack.Screen
        name="userInfo"
        options={{
          title: "Profile",
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
}
