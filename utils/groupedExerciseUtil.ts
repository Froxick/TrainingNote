import { Training } from "@/types";
import { getDateKey } from "./DateUtil";

export const groupderExerciseUtil = (sets: Training[]) => {
    const grouped = sets.reduce<Record<string,Training[]>>((acc,set) => {
        const key = getDateKey(set.date) 
        if(!acc[key]) acc[key] = []
        acc[key].push(set)
        
        return acc
    },{})
    return grouped
}