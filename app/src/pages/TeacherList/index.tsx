import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import styles from './styles';
import Favorites from '../Favorites';



function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(true);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                return teacher.id;
            });

                setFavorites(favoritedTeachersIds);
            }
        });
    }

    async function handleFiltersSubmit() {  
        loadFavorites();
        
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });
    
            setTeachers(response.data);
            setIsFiltersVisible(false);
    }

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys Disponíveis"
                headerRight={(
                        <BorderlessButton onPress={handleToggleFiltersVisible}>
                            <Feather name="filter" color="#FFF" size={24} />
                        </BorderlessButton>
                )}
            >
                { isFiltersVisible && (
                    <View style={styles.searchForm} >
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput placeholderTextColor='#c1bccc' 
                            style={styles.input}
                            placeholder="Qual a matéria?"
                            value={subject}
                            onChangeText={text => setSubject(text)}
                        />
                        <View style={styles.inputGroup} >
                            <View style={styles.inputBlock} >
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput placeholderTextColor='#c1bccc' 
                                    style={styles.input}
                                    placeholder="Qual o dia?"
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                />
                            </View>

                            <View style={styles.inputBlock} >
                                <Text style={styles.label}>Horário</Text>
                                <TextInput placeholderTextColor='#c1bccc' 
                                    style={styles.input}
                                    placeholder="Qual a hora?"
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                />
                            </View>
                        </View>

                        <RectButton 
                            onPress={handleFiltersSubmit}
                            style={styles.submitButton}
                        >
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
        
            <View>
                <ScrollView 
                    style={styles.teacherList}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingBottom: 16,
                    }}
                >
                    { teachers.map((teacher: Teacher) => {
                        return (
                            <TeacherItem 
                                key={teacher.id} 
                                teacher={teacher}
                                favorited={favorites.includes(teacher.id)}
                            />
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default TeacherList;