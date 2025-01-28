import React from 'react'
import { Stack } from 'expo-router'

const DashboardLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}

export default DashboardLayout
