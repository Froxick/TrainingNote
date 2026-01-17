
import { useTheme } from '@/hooks/useTheme';
import { HomeScreen } from '@/screens/HomeScreen';
import { Stack } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';




export default function RootLayout() {

  const {loading,selectTheme} = useTheme()

  if(loading) {
    return (
      <View>
        <ActivityIndicator size={'large'}/>
      </View>
      
    )
  }
  return (
    <>
      <Stack screenOptions={{headerShown: false}}>
          <Stack.Screen 
            name='main'
           
          />
      </Stack>
    </>
  );
}
