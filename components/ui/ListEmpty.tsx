import { ColorsType } from "@/constants/theme"
import { Dimensions, StyleSheet, Text, View } from "react-native"
interface ListEmptyProps {
    title: string,
    themeColors: ColorsType
}
const {height} = Dimensions.get('screen')
export const ListEmpty = ({title,themeColors} : ListEmptyProps) => {
    const styles = StyleSheet.create({
        container : {
            justifyContent: 'center',
            alignContent: 'center',
            flex: 1,
            alignItems: 'center',
            marginTop: height / 3.5
        },
        text : {
            color: themeColors.darkDescriptionText,
            fontSize: 18,
            textAlign: 'center'
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