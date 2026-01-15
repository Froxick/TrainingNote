import { ModalWindow } from '@/components/smart/modalWindow';

import { AddButton } from '@/components/ui/AddButton';
import { CreateTrainingForm } from '@/components/smart/CreateTrainingForm';
import { Header } from '@/components/ui/Header';

import { useTraining } from '@/hooks/useTrainings';

import {  useMemo, useState } from 'react';
import { ActivityIndicator, SectionList, StyleSheet, View } from 'react-native';
import { Training, TrainingFormData } from '@/types';
import { ThemeSelectButton } from '@/components/ui/ThemeSelectButton';
import { useTheme } from '@/hooks/useTheme';
import { ListBar } from '@/components/ui/ListBar';
import { useExercisesFilter } from '@/hooks/useExercisesFilter';
import { formatDateToDMY, getDateKey } from '@/utils/DateUtil';
import { TrainingCard } from '@/components/ui/TrainingCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ListEmpty } from '@/components/ui/ListEmpty';

export const HomeScreen = () => {
    const {selectTheme,returnTheme,changeTheme} = useTheme()
    const {trainings,loading,addNewTraining,deleteTraining,editTrainingState,selectEdit,clearEdit,editTrainig} = useTraining()
    const {changeSort,selectExerciseFilter,clearFilters,filters} = useExercisesFilter()
    const visibleSets = useMemo(() => {
        let result = [...trainings]
        if(filters.exercises) {
            result = result.filter(
                el => el.exercise.toLocaleLowerCase() === filters.exercises?.toLocaleLowerCase()
            )
        }
        result.sort((a,b) => filters.sort === 'newest' ? 
        new Date(b.date).getTime() - new Date(a.date).getTime() :
            new Date(a.date).getTime() - new Date(b.date).getTime()
    )
    return result
    }, [trainings,filters])

    interface WindowModalState {
        createModal: boolean,
        editModal: boolean,
    }
    const[isOpen,setIsOpen] = useState<WindowModalState>({
        createModal: false,
        editModal: false,
    });
    const toggleModal = (field: keyof WindowModalState) => {
        setIsOpen(prev => ({
            ...prev,
            [field] : !prev[field]
        }))
    }

    const openEditMenu = (tr: Training) => {
        selectEdit(tr)
        toggleModal('editModal')
    }
    const onUpdateSubmit = (newTr: TrainingFormData) => {
        if(editTrainingState) {
            console.log('edit')
            const newTraining : Training = {
                id: editTrainingState.id,
                exercise: newTr.exercise,
                weight: newTr.weight,
                reps: newTr.reps,
                date: editTrainingState.date,
                rir: newTr.rir,
                rpe: newTr.rpe
            } 
            editTrainig(newTraining)}
        clearEdit()
        toggleModal('editModal')
    }
    
    const styles = StyleSheet.create({
        container : {
            backgroundColor: returnTheme().background,
            flex: 1,
            padding: 16,
            paddingVertical: 55
               
        },
        line: {
            height: 1,
            backgroundColor: '#4a4a4a8e',
            marginVertical: 16,
            marginHorizontal: 10
        },
        listView : {
            flex: 1,
            
        },
        headerContainer : {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        themeButtonContainer : {
            marginRight: 10,
        }
    })


    const onCreateTraining = (tr : TrainingFormData) => {
        const newTraining : Training = {
            id: Date.now().toString(),
            exercise: tr.exercise,
            weight: tr.weight,
            reps: tr.reps,
            date: tr.date,
            rir: tr.rir,
            rpe: tr.rpe
        } 
        addNewTraining(newTraining)
        toggleModal('createModal');
        
    }

    const sections = useMemo(() => {
        const grouped : Record<string,Training[]> = {}
        const sotrderSets = visibleSets
        for (const set of sotrderSets) {
            const key = getDateKey(set.date)
            if(!grouped[key]) {
                grouped[key] = []
            } 
            grouped[key].push(set)

        }
        return Object.entries(grouped).map(([title,data]) => ({
            title,
            data
        }))
    },[visibleSets])

    return(
        <>  
            {isOpen.createModal && (<ModalWindow colorsTheme={returnTheme()} onClose={() => toggleModal('createModal')} isVisible={isOpen.createModal} title="Создать подход">
                <CreateTrainingForm  onSubmit={onCreateTraining}/>
            </ModalWindow>)}

            {
                isOpen.editModal && (
                    <ModalWindow colorsTheme={returnTheme()} onClose={() => toggleModal('editModal')}
                        isVisible={isOpen.editModal} title='Подход'
                    >
                        <CreateTrainingForm training={editTrainingState || undefined} onSubmit={
                            onUpdateSubmit
                        }/>
                    </ModalWindow>
                )
            }
            <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Header 
                    title="Подходы "
                    size={32}
                    color={returnTheme().text}
                    subTitle='Все ваши подходы в одном месте.'
                />
                <View style={styles.themeButtonContainer}>
                    <ThemeSelectButton 
                        theme={selectTheme}
                        onPress={selectTheme === 'light' ? () => changeTheme('dark') : () => changeTheme('light')}
                    />
                </View>
             
                
            </View>
            <View style={styles.line}/>
            {loading ? (<ActivityIndicator size={'large'}/>) : (
                <View style={styles.listView}>
                    <ListBar 
                        sort={filters.sort}
                        selectedItem={filters.exercises}
                        onChangeSort={() => changeSort()}
                        onSelectItem={selectExerciseFilter}
                        themeColors={returnTheme()}
                        clearFilters={clearFilters}
                    />
                    <SectionList 
                        sections={sections}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => (
                            <TrainingCard 
                                training={item}
                                onDelete={deleteTraining}
                                themeColor={returnTheme()}
                                openEditMenu={() => openEditMenu(item)}  
                            />
                        )}
                        renderSectionHeader={({section}) => (
                            <SectionHeader 
                                title={formatDateToDMY(section.title)}
                                themeColors={returnTheme()}
                            />
                        )}
                        ListEmptyComponent={
                            <ListEmpty 
                                title='Нет записей'
                                 themeColors={returnTheme()}
                            />
                        }
                        
                    />
                   
                </View>
            )}
            <AddButton onPress={() => toggleModal('createModal')}/>

        </View>
        </>
        
    )
    
}

