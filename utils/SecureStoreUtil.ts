import * as SecureStore from 'expo-secure-store';
export  const storageUtil =  () => {

    const getStringItem =  (key: string) => {
        
        const item = SecureStore.getItem(key)
        return item 
    }
    const setStringItem = (key: string,value: string) => {
        SecureStore.setItem(key,value)
    }
    const deleteItem = async (key: string) => 
        SecureStore.deleteItemAsync(key)
    return {
        getStringItem,setStringItem,deleteItem
    }
}