import { Training } from "@/types"
import { loadTrainings, saveTrainings } from "@/utils/FileTrainingStore"
import { useEffect, useState } from "react"


export const useTraining = () => {
    const [trainings,setTrainings] = useState<Training[]>([])
    const[editTrainingState,setEditTrainingState] = useState<Training | null>(null)

    const [loading,setLoading] = useState<boolean>(true)
   

    useEffect(() => {

        const load = async () => {
            setLoading(true)
            const trngs =  await loadTrainings()
            setTrainings(trngs)
            setLoading(false);
        }
        load()
        
    }, [])

    const selectEdit = (tr : Training) => {
        setEditTrainingState(tr)
    }
    const clearEdit = () => {
        setEditTrainingState(null)
    }
    const addNewTraining = async (tr: Training) => {
        const newTrainingList = [...trainings,tr]
        setTrainings(newTrainingList)
        await saveTrainings(newTrainingList)
    }
    const deleteTraining = async (id: string) => {
        const newList = trainings.filter((tr) => tr.id !== id)
        setTrainings(newList)
        await saveTrainings(newList)
    }

    const editTrainig = async (tr: Training) => {
        const trainingsCopy = [...trainings]
        const index = trainingsCopy.findIndex(t => t.id === tr.id)
        if(index === -1) return;
        trainingsCopy[index] = tr       
        setTrainings(trainingsCopy)
        await saveTrainings(trainingsCopy)
    }

    return {
        loading,trainings,
        addNewTraining,deleteTraining,editTrainig,editTrainingState,clearEdit,selectEdit
    }
}