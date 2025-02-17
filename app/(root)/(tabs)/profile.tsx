import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'

const Profile = () => {

  const handleLogout = async () => {}
  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerClassName='pb-32 px-7'
      >
        <View className='flex flex-row justify-between mt-5'>
          <Text className='text-xl font-rubik-bold'>Profile</Text>
          <Image source={icons.bell} className='size-5'/>
        </View>
        <View className='flex flex-row justify-center mt-5'>
          <View className='flex flex-col items-center relative mt-5'>
            <Image source={images.avatar} className='size-44 rounded-full'/>
            <TouchableOpacity className='absolute bottom-11 right-2'>
              <Image source={icons.edit} className='size-9 '/>
            </TouchableOpacity>
            <Text className="font-rubik-Medium text-base text-black-300">Muhammad</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile