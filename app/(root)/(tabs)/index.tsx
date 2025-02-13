import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-rubik-extrabold my-10">Welcome!</Text>
      <Link href="/signIn">Sing-In</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/explore'>Explore</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
}
