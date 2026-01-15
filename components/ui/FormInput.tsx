import { ColorsType } from "@/constants/theme"
import { StyleSheet, Text, TextInput, View } from "react-native"
interface FormInputProps {
    value: string,
    onChangeText: (text: string) => void,
    placeholder?: string,
    maxLength?: number,
    themeColors: ColorsType
}
export const FormInput = ({themeColors,value,onChangeText,placeholder,maxLength} : FormInputProps) => {
    const styles = StyleSheet.create({
        inputContainer : {
            flex: 1,
            position: 'relative',
        },
        input : {
            color: themeColors?.text || '#000',
            height: 40,
            borderColor: themeColors?.inputBorder || '#ddd',
            borderWidth: 1,
            borderRadius: 8,
            paddingHorizontal: 10,
            flex: 1,
            zIndex: 1,
        },
        placeholderText : {
            position: 'absolute',
            top: -10,
            left: 10,
            zIndex: 10000,
            fontSize: 12,
            color: themeColors?.descriptionText || '#687076',
        }
    })
    return (
        <View style={styles.inputContainer}>
           {
            value.length !== 0 && (
                 <Text style={styles.placeholderText}>
                    {placeholder}
                </Text>
            )
           }
            <TextInput 
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                maxLength={maxLength}
                placeholderTextColor={themeColors?.darkDescriptionText || '#687076'}
                keyboardType="numeric"
            />
        </View>
    )
}