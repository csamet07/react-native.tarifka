import React from 'react';
import {
    SafeAreaView,
    FlatList
} from 'react-native';
import styles from './Meals.style';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import MealCard from '../../components/MealCard';

const Meals = ({route,navigation}) => {
    const {title} = route.params;
    
    const MealListUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${title}`;
    const {error, loading, data} = useFetch(MealListUrl);
    const onChooseMeal = id => {
        navigation.navigate('MealDetails', {id})
    }

    const renderingItem = ({ item }) => <MealCard onChooseMeal={onChooseMeal} meal={item} />

    if(error){
        return <Error />
    }

    if(loading){
        return <Loading />
    }

    return (
        <FlatList
            data={data.meals}
            renderItem={renderingItem}
            keyExtractor={item => item.idMeal}
            style={styles.container}
        />
    )
}

export default Meals;