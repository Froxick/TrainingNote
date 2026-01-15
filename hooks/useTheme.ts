
import { getColors } from "@/constants/theme";
import { storageUtil } from "@/utils/SecureStoreUtil";
import { useEffect, useState } from "react"

export type ThemeT = 'light' | 'dark'
export const useTheme = () => {
   
    const {setStringItem,getStringItem } = storageUtil()
    const[selectTheme,setSelectTheme] = useState<ThemeT>('dark');
    const[loading,setLoading] = useState<boolean>(true);

    useEffect(( ) => {
        setLoading(true)
        const theme = getStringItem('theme');
        if(theme) {
            setSelectTheme(theme as ThemeT)
        } else {
            setSelectTheme('dark')
            setStringItem('theme','dark')
           
        }
        setLoading(false)
    }, [getStringItem,setStringItem])
    const returnTheme = () => {
        return getColors(selectTheme);
    }
    const changeTheme =  (theme: ThemeT) => {
        setSelectTheme(theme)
        setStringItem('theme',theme)
    }
    return {
        selectTheme,loading,returnTheme,changeTheme
    }
}