
import { ColorsType } from "@/constants/theme"
import { useTheme } from "@/hooks/useTheme"
import { ReactNode } from "react"
import { Dimensions, Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native"
interface ModalWindowProps {
    children: ReactNode,
    isVisible: boolean,
    onClose: () => void,
    title?: string,
    themeColors? : ColorsType
   
}
const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export const NoScrollModalWindow = ({isVisible,onClose,title,children,themeColors} : ModalWindowProps) => {
     const {returnTheme} = useTheme()
    const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        modalOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: themeColors?.modalbackground || returnTheme().modalbackground,
        },
        modalContent: {
            backgroundColor: themeColors?.modalBackgroundContent || returnTheme().modalBackgroundContent,
            borderRadius: 12,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            width: screenWidth * 0.85, 
            maxWidth: 400,
            maxHeight: screenHeight * 0.8, 
            marginHorizontal: 20,
        },
        scrollContent: {
            flexGrow: 1,
        },
        modalTitle: {
            color: themeColors?.text || returnTheme().text,
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 15,
        }
    })
   
    return (
        <Modal
            visible={isVisible}
            animationType="fade"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                
                <TouchableWithoutFeedback onPress={onClose}>
                    <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>
                
              
                <View style={styles.modalContent}>
                   
                    {title && (
                        <Text style={styles.modalTitle}>
                            {title}
                        </Text>
                    )}
                    
                   
                    <View 
                    >
                        {children}
                    </View>
                </View>
            </View>
        </Modal>
    )
}
