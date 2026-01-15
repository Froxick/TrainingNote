import { StyleSheet, View } from "react-native"
import { NameSelector } from "./NameSelector"
import { EXERCISES } from "@/constants/exercises"
import { useExercisesForm } from "@/hooks/useExercisesForm"
import { FormInput } from "../ui/FormInput"
import { useTheme } from "@/hooks/useTheme"
import { Button } from "../ui/Button"
import { Training, TrainingFormData } from "@/types"
import { useEffect } from "react"

interface CreateTrainingFormProps {
    onSubmit: (tr: TrainingFormData) => void,
    training?: Training
}
export const CreateTrainingForm = ({onSubmit,training} : CreateTrainingFormProps) => {
    const { formData, updateFormData,validateForm } = useExercisesForm();
    const { returnTheme } = useTheme();
    useEffect(() => {
        if(training) {
            updateFormData('exercise',training.exercise)
            updateFormData('reps',training.reps)
            updateFormData('weight',training.weight)
            updateFormData('rir',training.rir)
            updateFormData('rpe',training.rpe)
        }
    }, [training,updateFormData])
    return (
        <View style={styles.container}>
            <NameSelector
                selectItems={EXERCISES}
                selectedItem={formData.exercise}
                onSelectItem={(item) => updateFormData('exercise',item)}
                placeholder="Выберите упражнение"
            />
          <View style={styles.inputsContainer}>
              <FormInput 
                value={formData.weight}
                onChangeText={(text) => updateFormData('weight',text)}
                placeholder="Вес (кг)"
                themeColors={returnTheme()}
                maxLength={4}
            />
            <FormInput 
                value={formData.reps}
                onChangeText={(text) => updateFormData('reps',text)}
                placeholder="Повторения"
                themeColors={returnTheme()}
                maxLength={4}
            />
            
          </View>

          <View style={styles.inputsContainer}>
                <FormInput 
                    value={formData.rir}
                    onChangeText={(text) => updateFormData('rir',text)}
                    placeholder="Запас"
                    themeColors={returnTheme()}
                    maxLength={2}
                />

                <FormInput 
                    value={formData.rpe}
                    onChangeText={(text) => updateFormData('rpe',text)}
                    placeholder="RPE"
                    themeColors={returnTheme()}
                    maxLength={3}
                />
          </View>
          <View style={styles.buttonContainer}>
            <Button 
                text={training ? 'Сохранить' : 'Создать'}
                colorTheme={returnTheme()}
                disabled={validateForm() === false}
                onPress={() => onSubmit(formData)}
            />
          </View>
        </View>
    )

}
const styles = StyleSheet.create({
    inputsContainer : {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginTop: 15,
    },
    container: {
        gap: 10
    },
    buttonContainer : {
        marginTop: 20
    }
})