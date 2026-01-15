import { ColorsType } from "@/constants/theme"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { NameSelector } from "../smart/NameSelector"
import { EXERCISES } from "@/constants/exercises"
import { DateFilterButton } from "./DateFilterButton"
import Ionicons from "@expo/vector-icons/Ionicons"
import { SordOrder } from "@/types"
interface ListBarProps {
    themeColors: ColorsType,
    sort: SordOrder,
    onSelectItem: (item: string) => void,
    onChangeSort: () => void;
     clearFilters : () => void;
    selectedItem? : string,
   
}
export const ListBar = ({themeColors,onChangeSort,onSelectItem,selectedItem,sort,clearFilters} : ListBarProps) => {
    const styles = StyleSheet.create({
        container : {
            backgroundColor : themeColors.cardBackground,
            height: 60,
            paddingVertical: 6,
            borderRadius: 10,
            marginBottom : 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 12,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: themeColors.iconBackground
        },
        block : {
            maxWidth: 150
        },
        clearButton : {
            padding: 3,
            backgroundColor: '#cf2222',
            borderRadius: 500,
        
        }
    })
    return (
        <View style={styles.container}>
            
            <View style={styles.block}>
                <NameSelector 
                    selectItems={EXERCISES}
                    selectedItem={selectedItem || ''}
                    onSelectItem={onSelectItem}
                    placeholder="Упражнение"
                    themeColors={themeColors}
                />
            </View>
            <View style={styles.block}>
                <DateFilterButton 
                    title={sort === 'newest' ? 'Сначала новые' : 'Сначала старые'}
                    themeColors={themeColors}
                    onPress={onChangeSort}
                />
            </View>
            {
                (selectedItem || sort !== 'newest') && (
                    <View style={styles.block}>
                        <TouchableOpacity style={styles.clearButton} onPress={clearFilters}>
                            <Ionicons 
                                color={'#fff'}
                                name='close'
                                size={22}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
}