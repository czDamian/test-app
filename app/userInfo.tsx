import { Entypo, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { User } from "../types/User";

export default function UserInfo() {
  const { id } = useLocalSearchParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchUser(id as string);
    }
  }, [id]);

  async function fetchUser(userId: string) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Failed to fetch user", error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View className="flex-1 bg-neutral-900 justify-center items-center">
        <ActivityIndicator size="large" color="#4ade80" />
      </View>
    );
  }

  if (!user) {
    return (
      <View className="flex-1 bg-neutral-900 justify-center items-center">
        <Text className="text-white text-xl font-montserrat-bold">
          User not found
        </Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-neutral-900">
      {/* Header Section */}
      <View className="bg-neutral-800 p-6 rounded-b-[30px] shadow-lg mb-6">
        <View className="items-center">
          <View className="w-24 h-24 bg-green-500 rounded-full justify-center items-center mb-4 shadow-md">
            <Text className="text-4xl text-white font-bold">
              {user.name.charAt(0)}
            </Text>
          </View>
          <Text className="text-2xl font-montserrat-bold text-white text-center">
            {user.name}
          </Text>
          <Text className="text-green-400 font-montserrat text-lg mt-1">
            @{user.username}
          </Text>
        </View>
      </View>

      <View className="px-4 pb-8 space-y-4">
        {/* Contact Info */}
        <View className="bg-neutral-800 p-4 rounded-2xl shadow-sm">
          <View className="flex-row items-center mb-4 border-b border-neutral-700 pb-2">
            <MaterialIcons name="contact-mail" size={24} color="#4ade80" />
            <Text className="text-green-50 font-montserrat-bold text-lg ml-2">
              Contact Info
            </Text>
          </View>

          <InfoRow
            icon={<MaterialIcons name="email" size={20} color="#9ca3af" />}
            label="Email"
            value={user.email}
          />
          <InfoRow
            icon={<MaterialIcons name="phone" size={20} color="#9ca3af" />}
            label="Phone"
            value={user.phone}
          />
          <InfoRow
            icon={<MaterialIcons name="language" size={20} color="#9ca3af" />}
            label="Website"
            value={user.website}
          />
        </View>

        {/* Address Info */}
        <View className="bg-neutral-800 p-4 rounded-2xl shadow-sm mt-4">
          <View className="flex-row items-center mb-4 border-b border-neutral-700 pb-2">
            <FontAwesome5 name="map-marked-alt" size={20} color="#4ade80" />
            <Text className="text-green-50 font-montserrat-bold text-lg ml-3">
              Address
            </Text>
          </View>

          <InfoRow
            icon={<Entypo name="location-pin" size={24} color="#9ca3af" />}
            label="Street"
            value={`${user.address.street}, ${user.address.suite}`}
          />
          <InfoRow
            icon={<MaterialIcons name="location-city" size={20} color="#9ca3af" />}
            label="City"
            value={`${user.address.city}, ${user.address.zipcode}`}
          />
          <InfoRow
            icon={<MaterialIcons name="my-location" size={20} color="#9ca3af" />}
            label="Geo"
            value={`${user.address.geo.lat}, ${user.address.geo.lng}`}
          />
        </View>

        {/* Company Info */}
        <View className="bg-neutral-800 p-4 rounded-2xl shadow-sm mt-4">
          <View className="flex-row items-center mb-4 border-b border-neutral-700 pb-2">
            <MaterialIcons name="business" size={24} color="#4ade80" />
            <Text className="text-green-50 font-montserrat-bold text-lg ml-2">
              Company
            </Text>
          </View>

          <InfoRow
            icon={null}
            label="Name"
            value={user.company.name}
            highlight
          />
          <Text className="text-neutral-400 italic mt-2 text-sm">
            &quot;{user.company.catchPhrase}&quot;
          </Text>
          <Text className="text-neutral-500 text-xs mt-1">
            {user.company.bs}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

function InfoRow({
  icon,
  label,
  value,
  highlight = false,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <View className="flex-row items-center py-2">
      <View className="w-8 items-center">{icon}</View>
      <View className="flex-1 ml-2">
        <Text className="text-neutral-500 text-xs font-montserrat uppercase tracking-wider">
          {label}
        </Text>
        <Text
          className={`font-montserrat text-base ${highlight ? "text-green-400 font-bold" : "text-white"
            }`}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}
