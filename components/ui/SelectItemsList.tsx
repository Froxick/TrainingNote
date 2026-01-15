import { ColorsType } from "@/constants/theme";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { SearchInput } from "./SearchInput";
interface SelectItemsListProps {
    data: string[];
    selectItem: (item: string) => void;
    selectedItem: string;
    search: string;
    handleSearch: (text: string) => void;
    themeColors: ColorsType
}
export const SelectItemsList = ({ data, selectItem, selectedItem, search, handleSearch,themeColors }: SelectItemsListProps) => {
    
    const styles = StyleSheet.create({
        listContainer: { 
            marginTop: 10,
            
            backgroundColor: themeColors?.inputBackground || '#f5f5f5',
            borderWidth: 1,
            borderColor: themeColors?.inputBorder || '#ddd',
            borderRadius: 10,
            maxHeight: 300,
            paddingHorizontal: 10,
            paddingVertical: 10,
            minHeight: 100,
        },
        listItem: {
            borderWidth: 1,
            borderColor: themeColors?.inputBorder || '#ddd',
            borderRadius: 5,
            padding: 4,
            marginBottom: 10,
        },
        listText : {
            fontSize: 16,
            paddingVertical: 5,
            paddingHorizontal: 10,
        }

    })
    return (
       <View>
         <SearchInput 
            search={search}
            handleSearch={handleSearch}
            themeColors={themeColors}
         />
         <View style={styles.listContainer}>
            <FlatList data={data}
                ListEmptyComponent={<View style={[styles.listContainer,
                    {justifyContent: 'center', alignItems: 'center'}
                ]}>
                    <Text style={{color: themeColors?.darkDescriptionText || '#687076', textAlign: 'center'}}>Ничего не найдено</Text>
                </View>}
                renderItem={({item}) => (
                    <TouchableOpacity style={[styles.listItem,
                        item === selectedItem && {
                            borderColor: themeColors?.text || '#000',
                        }
                    ]} onPress={() => selectItem(item)}>
                        <Text style={[
                            styles.listText, item === selectedItem ? {
                                color: themeColors?.text || '#000',
                                fontWeight: 'bold' 
                            } : {
                                color: themeColors?.darkDescriptionText || '#687076',
                            }
                        ]} onPress={() => selectItem(item)}

                            >
                            {item} {item === selectedItem ? '✓' : ''}
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={( index) => index.toString()}
                
            />
         </View>
       </View>
    )
}