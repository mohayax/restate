import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { auth, googleProvider } from '../firebase.config'
import { signInWithPopup } from 'firebase/auth'

const SignIn = () => {

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.error(error)
    }
  }
  const handleLogin = () => {}
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6' resizeMode='contain'/>
        <View className='px-10'>
          <Text className='text-base text-center uppercase text-black-200 font-rubik'>Welcome To Restate</Text>
          <Text className='text-3xl font-rubik-bold text-center text-black-300 mt-2'>
            Let's Get You Closer to {'\n'}
            <Text className='text-primary-300'>Your Ideal Home</Text>
          </Text>
          <Text className='text-lg font-rubik text-black-200 text-center mt-12'>Login to Restate with Google</Text>
          <TouchableOpacity className='bg-white shadow-md shadow-zinc-300 rounded-full py-4 mt-5' onPress={handleSignIn}>
            <View className='flex flex-row items-center justify-center'>
              <Image
              source={icons.google}
              className='w-5 h-5'
              resizeMode='contain'
              />
              <Text className='text-lg font-rubik-Medium text-black-300 ml-2'>Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn