
import Ionicons from "@expo/vector-icons/Ionicons"
import { TouchableOpacity,  } from 'react-native';
interface ThemeSelectButtonProps {
    theme: 'light' | 'dark',
    onPress: () => void,
}
export const ThemeSelectButton = ({ theme, onPress }: ThemeSelectButtonProps) => {

    return (
        <TouchableOpacity style={{padding:5}} onPress={onPress}>
            <Ionicons name={theme === 'light' ? 'sunny' : 'moon'} size={30} color={
                theme === 'light' ? '#f39c12' : '#e1e1e1'
            }/>
        </TouchableOpacity>
    )
}