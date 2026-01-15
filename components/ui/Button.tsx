import { ColorsType } from "@/constants/theme"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
interface ButtonProps { 
    text: string,
    colorTheme: ColorsType,
    onPress?: () => void,
    disabled?: boolean,
}
export const Button = ({text, colorTheme,
    onPress,disabled
} : ButtonProps) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: colorTheme?.buttonBackground || '#007bff',
            borderRadius: 8,
            paddingVertical: 12,
            paddingHorizontal: 20,
        },
        disabledButton: {
            backgroundColor: colorTheme.darkDescriptionText,
            opacity: 0.6,
        },
        buttonText : {
            textAlign: 'center',
            color: colorTheme.text,
            fontSize: 16,
            fontWeight: '600',
        }
    })
    return (
        <TouchableOpacity disabled={disabled} onPress={onPress} 
            style= {[styles.button, disabled && styles.disabledButton]}>
            <Text style={[styles.buttonText, disabled && {color: colorTheme.darkDescriptionText}]}>
              {text}
            </Text>
        </TouchableOpacity>
    )
}