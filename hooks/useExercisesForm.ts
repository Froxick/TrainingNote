import { TrainingFormData } from "@/types";
import { useState } from "react";

export const useExercisesForm = () => {
    const initialFormData : TrainingFormData = {
            exercise: '',
            weight: '',
            reps: '',
            rir: '',
            rpe: '',
            date: new Date(),
    }
    const [formData,setFormData] = useState<TrainingFormData>(initialFormData);

    const clearForm = () => {
        setFormData(initialFormData);
    }
    const updateFormData = (
        field : keyof TrainingFormData,
        value : string | Date 
    ) => {
        setFormData((prev) => ({
            ...prev,
            [field] : value
        }))
    }
    const validateForm = () : boolean => {
        if (
            formData.exercise.trim() === '' ||
            formData.weight.trim() === '' ||
            formData.reps.trim() === ''
        ) {
            return false;
        }
        return true;
    }

    return {
        updateFormData,
        formData,
        clearForm,
        validateForm
    };
}