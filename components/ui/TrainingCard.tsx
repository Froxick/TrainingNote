import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Training } from '../../types';
import Ionicons from '@expo/vector-icons/Ionicons';

import { ColorsType } from '@/constants/theme';
import { getRpeColor } from '@/utils/getRpeColor';
import { getRIRColor } from '@/utils/getRIRColor';
interface TrainingCardProps  {
    training: Training,
    onDelete: (id: string) => void,
    themeColor: ColorsType,
    openEditMenu : () => void
}
export const TrainingCard = ({training, onDelete, themeColor,openEditMenu}: TrainingCardProps) => {
    
    const styles = StyleSheet.create({
        container : {
            backgroundColor: themeColor.cardBackground,
            borderRadius: 12,
            paddingHorizontal: 10,
            paddingVertical: 12,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1, 
            marginBottom: 15,
            borderWidth: 1,
            borderColor: themeColor.iconBackground
        },
        titleContainer : {
            flexDirection: 'row',
            alignItems: 'flex-start',
            flex: 1, 
        },
        iconCircle : {
            backgroundColor: themeColor.iconBackground,
            padding: 8,
            borderRadius: 50,
            marginRight: 12
        },
        title: {
           color: themeColor.text,
            fontSize: 20,
            fontWeight: 'bold',
            flexShrink: 1,  
        },
        headerContainer : {
            flexDirection: 'row',
            alignItems: 'flex-start',
            
            marginBottom: 8
        },
        content : {
            flexDirection: 'column',
            marginLeft: 2,
            gap: 18,
            padding: 10,
            borderRadius: 8,
            marginTop: 6,
            backgroundColor: themeColor.cardContentBackground,
            
        },
        contentText: {
            color: themeColor.descriptionText,
            fontSize: 16
        },
        deleteButton: {
            backgroundColor: themeColor.iconBackground,
            padding: 6,
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1, 
        },
        titleAndDateContainer: {
             flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            flexWrap: 'wrap',
        },
        dateText: {
            color: themeColor.darkDescriptionText,
            fontSize: 14
        },
        contentBlock: {
            flexDirection: 'row'
        }
    })
    return (
        <TouchableOpacity onPress={openEditMenu} style={styles.container}>
                        <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
                <View style={styles.iconCircle}>
                <Ionicons name="barbell" size={24} color={themeColor.icon} />
                </View>

                <View style={{ flex: 1 }}>
                <Text style={styles.title}>
                    {training.exercise}
                </Text>

                {/* <Text style={styles.dateText}>
                    {formatDateToDMY(training.date)}
                </Text> */}

                <View style={styles.content}>
                   
                    <View style={styles.contentBlock}>
                         <Text style={styles.contentText}>{training.weight}кг</Text>
                         <Text style={styles.contentText}> - {training.reps} раз(а)</Text>
                    </View>
                   {
                    (training.rir.length > 0 || training.rpe.length > 0 ) && (
                         <View style={styles.contentBlock}>
                                {
                                training.rpe.length > 0 && ( <Text style={[
                                    styles.contentText,{color : getRpeColor(Number(training.rpe))}
                                ]}>RPE {training.rpe}</Text>)
                                }

                                {
                                    training.rir.length > 0 && (
                                        <Text  style={[
                                            styles.contentText, {
                                                color: getRIRColor(Number(training.rir))
                                            }
                                        ]}>  Запас -  {training.rir} </Text>
                                    )
                                }
                                
                            </View>
                          )
                   }
                </View>
                </View>
            </View>

            <TouchableOpacity
                style={[styles.deleteButton, { marginLeft: 'auto' }]}
                onPress={() => onDelete(training.id)}
            >
                <Ionicons name="trash" size={26} color="#c32020" />
            </TouchableOpacity>
            </View>

        </TouchableOpacity>
    )
}