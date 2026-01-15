import { Training } from "@/types";
import { ScrollView, StyleSheet, Text } from "react-native";
import { TrainingCard } from "../ui/TrainingCard";
import { ColorsType } from "@/constants/theme";

interface TrainingListViewProps {
    trainings: Training[];
    onDelete: (id: string) => void;
    themeColors : ColorsType,
    openEditMenu: (tr: Training) => void
}
export const TrainingListView = ({trainings, onDelete, themeColors,openEditMenu}: TrainingListViewProps) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingVertical: 10,
            
        },
        emptyText: {
            textAlign: 'center',
            marginTop: 20,
            fontSize: 16,
            color: '#888'
        }
    })
    return (
        <ScrollView style={styles.container}>
          {
            trainings.length === 0 ? (<Text style={styles.emptyText}>Нет записей</Text>) : (
              trainings.map(tr => (
                <TrainingCard 
                  openEditMenu={() => openEditMenu(tr)}
                  themeColor={themeColors}
                  key={tr.id} training={ tr}
                  onDelete={onDelete}
                />
              ))
            )
          }
        </ScrollView>
    )
}