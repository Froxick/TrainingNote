import { StyleSheet, Text, View } from "react-native"
interface HeaderProps {
    title: string,
    size: number,
    color: string,
    subTitle?: string,
    subTitleColor?: string
}
export const Header = ({title, size, color,subTitle,subTitleColor}: HeaderProps) => {
    const styles = StyleSheet.create({
        container: {

        },
        text: {
            fontSize: size,
            color: color,
            fontWeight: 'bold'
        },
        subTitleText: {
            fontSize: size / 2,
            color: subTitleColor ? subTitleColor : '#666',
            marginTop: 2
        }
    })
    return (
        <View style={styles.container}>
            <Text
                style={styles.text}
            >{title}</Text>
            {subTitle &&  (
                <Text style={styles.subTitleText}>
                    {subTitle}
                </Text>
            )}
        </View>
    )

}