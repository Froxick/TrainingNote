import { ExercisesFilters } from "@/types"
import { useState } from "react"

export const useExercisesFilter = () => {
    const initialState : ExercisesFilters = {
        sort: 'newest',
    }
    const [filters,setFilters] = useState<ExercisesFilters>(initialState)

    const changeSort = () => {
        setFilters(prev => ({
            ...prev,
            sort: prev.sort === 'newest' ? 'oldest' : 'newest'
        }))
        console.log('changed to ', filters.sort)
    }

    const selectExerciseFilter = (exercise: string) => {
        setFilters((prev) => ({
            ...prev,
            exercises: exercise
        }))
    }
    const clearFilters = () => {
        setFilters(initialState)
    }
    return {
        filters,changeSort,selectExerciseFilter,clearFilters
    }
}