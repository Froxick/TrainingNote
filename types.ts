

export interface TrainingFormData  {
    exercise: string,
    weight: string,
    reps: string,
    date: Date,
    rir: string,
    rpe: string
}

export interface Training extends TrainingFormData {
    id: string,
}
export type SordOrder = 'newest' | 'oldest'
export interface ExercisesFilters { 
    sort: SordOrder,
    exercises? : string
}