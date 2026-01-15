import { useTheme } from "@/hooks/useTheme"
import Ionicons from "@expo/vector-icons/Ionicons"
import { StyleSheet, TouchableOpacity } from "react-native"

export const AddButton = ({onPress}: {onPress: () => void}) => {
    const {returnTheme} = useTheme()
    const styles = StyleSheet.create ({
        button : {
            position: 'absolute',
            bottom: 30,
            right: 20,
            zIndex: 1000,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
        }
    })
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Ionicons name="add-circle" size={64} color={returnTheme().addButtonColor} onPress={onPress}/>
        </TouchableOpacity>
    )
}