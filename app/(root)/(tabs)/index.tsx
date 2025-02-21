import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Search from "@/components/Search";
import { FeaturedCard, RegularCard } from "@/components/Cards";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full"/>
            <View className="flex flex-col items-start">
              <Text className="text-xs text-black-100  font-rubik">Good Morning</Text>
              <Text className="font-rubik-Medium text-base text-black-300">Muhammad</Text>
            </View>
          </View>
          <View>
            <Image source={icons.bell} className="size-6"/>
        </View>
        </View>
        <Search/>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
          <TouchableOpacity>
            <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
          </TouchableOpacity>
        </View>
        <FeaturedCard/>
        <RegularCard/>
      </View>
    </SafeAreaView>
  );
}
