import { ColorsType } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
interface SearchInputProps { 
    search : string,
    handleSearch : (text: string) => void,
    themeColors? : ColorsType
}
export const SearchInput = ({search, handleSearch, themeColors} : SearchInputProps) => {
  const styles = StyleSheet.create({
    searchInput: {
            height: 50,
            borderColor: themeColors?.inputBorder || '#ddd',
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            color: themeColors?.text || '#000',
    },
    inputContainer : {
        position: 'relative',
    },
    clearButton : {
        position: 'absolute',
        right: 12,
        top: 11,
    }
  })
  
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Поиск..."
        placeholderTextColor={"#7a7a7a"}
        value={search}
        onChangeText={handleSearch}
        autoFocus={true}
      />
      {
        search.length !== 0 && (
            <TouchableOpacity style={styles.clearButton} onPress={() => handleSearch('')}>
                <Ionicons name='close' size={26} color={'#d71919'} />
            </TouchableOpacity>
        )
      }
      
    </View>
  );
};
