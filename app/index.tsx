import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";

export default function LandingPage() {
  return (
    <View className="flex-1 bg-neutral-900">
      <StatusBar style="light" />

      {/* Background decoration with simple opacity */}
      <View className="absolute inset-0 bg-black/30 z-0" />

      <View className="flex-1 justify-center items-center px-6 z-10">
        <View className="bg-green-500/20 p-4 rounded-full mb-6">
          <MaterialIcons name="people" size={48} color="#4ade80" />
        </View>

        <Text className="font-montserrat-bold text-4xl text-white text-center mb-2">
          UserDirectory
        </Text>

        <Text className="font-montserrat text-neutral-400 text-lg text-center mb-12 px-4">
          Connect with professionals. Explore profiles and find contact details easily.
        </Text>

        <Link href="/users" asChild>
          <Pressable className="bg-green-500 px-8 py-4 rounded-full flex-row items-center space-x-2 shadow-lg active:bg-green-600">
            <Text className="text-neutral-900 font-montserrat-bold text-lg mr-2">
              Get Started
            </Text>
            <MaterialIcons name="arrow-forward" size={24} color="#171717" />
          </Pressable>
        </Link>
      </View>

      <View className="absolute bottom-8 w-full items-center z-10">
        <Text className="text-neutral-600 font-montserrat text-xs">
          Version 1.0.0 (MVP Demo)
        </Text>
      </View>
    </View>
  );
}
