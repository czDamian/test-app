import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import { User } from "../types/User";

export default function Index() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    console.log("app loaded");
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const getUsers = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const usersReturned: User[] = await getUsers.json();
      console.log("users returned", usersReturned);
      setUsers(usersReturned);
    } catch (error) {
      console.log("failed to get users");
    }
  }

  return (
    <View className="flex-1">
      <ScrollView className="bg-neutral-900 p-4">
        <Text className="font-montserrat-bold text-2xl text-green-50 mb-8">
          Users List
        </Text>
        <Text className="font-montserrat text-sm text-green-50 mb-8">
          List of all the users in our platform, their names and contact details. Click on a user to view the user's profile.
        </Text>
        {users.map((user) => (
          <Link
            key={user.id}
            href={{
              pathname: "/userInfo",
              params: { id: user.id },
            }}
            asChild
          >
            <Pressable className="flex-row gap-4 justify-between items-center p-4 mb-3 border border-neutral-600 rounded-lg bg-neutral-800">
              <Text className="text-white font-montserrat min-w-6">
                {user.id}
              </Text>
              <View className="flex-1 flex-row justify-between items-center gap-4">
                <Text className="text-white font-montserrat flex-1">
                  {user.name}
                </Text>
                <Text className="text-white font-montserrat">{user.phone}</Text>
              </View>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}
