
import { useTheme } from '@/hooks/useTheme';
import { HomeScreen } from '@/screens/HomeScreen';
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
    <HomeScreen theme={selectTheme} />
  );
}
