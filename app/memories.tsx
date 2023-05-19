import Icon from '@expo/vector-icons/Feather'
import { Link } from 'expo-router'
import React from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import NLWLogo from '../src/assets/nlw-spacetime-logo.svg'

export default function Memories() {
  const { bottom, top } = useSafeAreaInsets()
  return (
    <ScrollView
      className="flex-1 px-8"
      contentContainerStyle={{ paddingBottom: bottom, paddingTop: top }}
    >
      <View className="mt-4 flex-row items-center justify-between">
        <NLWLogo />

        <Link href="/new" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
            <Icon name="plus" size={16} color="#fff" />
          </TouchableOpacity>
        </Link>
      </View>

      <View className="mt-4 flex-row items-center justify-between">
        <Link href="/index" asChild>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-red-500">
            <Icon name="log-out" size={16} color="#fff" />
          </TouchableOpacity>
        </Link>
      </View>

    </ScrollView>
  )
}