import { View, Text, ScrollView, Image, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { settings } from '@/constants/data'

interface settingsItemProps{
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}


const SettingsItem = ({icon, title, onPress, textStyle, showArrow = true}: settingsItemProps) => (
  <TouchableOpacity onPress={onPress} className='flex flex-row justify-between py-3'>
    <View className='flex flex-row justify-center gap-3'>
      <Image source={icon} className='size-6'/>
      <Text className={`text-lg font-rubik-Medium ${textStyle}text-black-300`}>{title}</Text>
    </View>
    {showArrow && <Image source={icons.rightArrow} className='size-5'/>}
  </TouchableOpacity>
)


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
            <TouchableOpacity className='absolute bottom-11 right-2 text-black-200'>
              <Image source={icons.edit} className='size-9'/>
            </TouchableOpacity>
            <Text className="font-rubik-bold text-2xl mt-2">Muhammad</Text>
          </View>
        </View>

        <View className='flex flex-col mt-10'>
          <SettingsItem icon={icons.calendar} title='My Bookings'/>
          <SettingsItem icon={icons.wallet} title='Payments' />
        </View>

        <View className='flex flex-col mt-5 border-t pt-5 border-primary-200'>
          {settings.slice(2).map((item, index) => (
            <SettingsItem key={index} {...item}/>
          ))}
        </View>

        <View className='flex flex-col mt-5 border-t pt-5 border-primary-200'>
          <SettingsItem icon={icons.logout} showArrow={false} title='Logout' textStyle='text-danger'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile