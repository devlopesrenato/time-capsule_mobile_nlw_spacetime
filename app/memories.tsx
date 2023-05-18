import { StatusBar } from 'expo-status-bar'
import { styled } from 'nativewind'
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'

import blurBg from '../src/assets/bg-blur.png'
import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'
import Stripes from '../src/assets/stripes.svg'

const StyledStripes = styled(Stripes)

export default function Memories() {
  return (
    <ImageBackground
      source={blurBg}
      className="relative flex-1 items-center bg-gray-900 px-8 py-10"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />
      <View className="flex-row w-screen p-5 items-center justify-between ">
        <NLWLogo />
        <TouchableOpacity
          activeOpacity={0.7}
          className="rounded-full bg-green-700 px-4 py-3"
          onPress={() => console.log('add')}
        >
          <Text className="font-alt text-sm uppercase text-black">
            +
          </Text>
        </TouchableOpacity>
      </View>



      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}