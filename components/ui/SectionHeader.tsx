import { ColorsType } from "@/constants/theme"
import { StyleSheet, Text, View } from "react-native"
interface SectionHeaderProps {
     title: string,
     themeColors : ColorsType
}
export const SectionHeader = ({title,themeColors} : SectionHeaderProps) => {
    const styles = StyleSheet.create({
        container : {

        },
        text : {
            color: themeColors.text,
            fontWeight: 'bold',
            fontSize: 20
        }
    })
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    )
}