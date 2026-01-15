import { Training} from "@/types"
import * as FileSystem from "expo-file-system/legacy"

export const FILE = FileSystem.documentDirectory + "workouts.json"

export const loadTrainings = async () : Promise<Training[]> => {
    const exists = await FileSystem.getInfoAsync(FILE)
    if(!exists.exists) return []

    const str = await FileSystem.readAsStringAsync(FILE)
    return JSON.parse(str);
}

export const saveTrainings = async (list: Training[]) => {
    await FileSystem.writeAsStringAsync(FILE,JSON.stringify(list))
}

