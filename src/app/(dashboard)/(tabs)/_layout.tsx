import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="rides" />
    </Tabs>
  )
}
export default TabLayout
