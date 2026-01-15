import { ColorsType } from "@/constants/theme"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
interface DateFilterButtonProps { 
    title: string,
    onPress: () => void,
    themeColors: ColorsType
}
export const DateFilterButton = ({title,onPress,themeColors} : DateFilterButtonProps) => {
    const styles = StyleSheet.create({
        container : {
            backgroundColor: themeColors.inputBackground,
            height: '100%',
            justifyContent: 'center',
            borderRadius: 10,
            borderColor: themeColors.inputBorder,
            borderWidth: 1
        },
        text: {
            color : themeColors.text,
            paddingHorizontal: 8
        }
    })
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}