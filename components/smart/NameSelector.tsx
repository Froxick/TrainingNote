import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Keyboard,
} from 'react-native';

import { SelectItemsList } from '../ui/SelectItemsList';
import { NoScrollModalWindow } from '../smart/NoScrollModalWindow';
import { useTheme } from '@/hooks/useTheme';
import { ColorsType } from '@/constants/theme';

interface NameSelectorProps {
    selectItems: string[];
    selectedItem: string;
    onSelectItem: (item: string) => void;
    placeholder?: string;
    themeColors? : ColorsType
}

export const NameSelector = ({ 
    selectItems, 
    selectedItem, 
    onSelectItem,
    themeColors,
    placeholder = "Выберите значение"
}: NameSelectorProps) => {
 const {returnTheme} = useTheme()
const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: themeColors?.inputBorder || returnTheme().inputBorder,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 12,
        backgroundColor: themeColors?.inputBackground || returnTheme().inputBackground,
    },
    selectedText: {
        fontSize: 16,
        color: themeColors?.text || returnTheme().text,
    },
    placeholderText: {
        fontSize: 16,
        color: themeColors?.darkDescriptionText || returnTheme().darkDescriptionText,
    },
    arrow: {
        fontSize: 12,
        color:themeColors?.darkDescriptionText || returnTheme().darkDescriptionText,
    },
    
    });



    const [modalVisible, setModalVisible] = useState(false);
    const [search, setSearch] = useState('');
    const [filteredItems, setFilteredItems] = useState(selectItems);
   
    const handleSearch = (text: string) => {
        setSearch(text);
        if (text.trim() === '') {
            setFilteredItems(selectItems);
        } else {
            const filtered = selectItems.filter(item =>
                item.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredItems(filtered);
        }
    };

    const handleSelect = (item: string) => {
        onSelectItem(item);
        setModalVisible(false);
        setSearch('');
        setFilteredItems(selectItems);
        Keyboard.dismiss();
    };

    const handleOpenModal = () => {
        setModalVisible(true);
        setSearch('');
        setFilteredItems(selectItems);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.inputContainer}
                onPress={handleOpenModal}
                activeOpacity={0.7}
            >
                <Text style={selectedItem ? styles.selectedText : styles.placeholderText}>
                    {selectedItem || placeholder}
                </Text>
                <Text style={styles.arrow}>▼</Text>
            </TouchableOpacity>

         
            <NoScrollModalWindow themeColors={themeColors} isVisible={modalVisible} onClose={() => setModalVisible(false)} title="Выберите упражнение">
                <SelectItemsList 
                    data={filteredItems}
                    selectItem={handleSelect}
                    selectedItem={selectedItem}
                    search={search}
                    handleSearch={handleSearch}
                    themeColors={themeColors || returnTheme()}
                />
            </NoScrollModalWindow>          
        </View>
    );
    
};
