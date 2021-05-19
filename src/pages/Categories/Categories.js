import React from 'react';
import {
    SafeAreaView,
    FlatList
} from 'react-native';
import styles from './Categories.style';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import CategoryCard from '../../components/CategoryCard/CategoryCard';

const Categories = ({navigation}) => {
    const CategoryListUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
    const {error, loading, data} = useFetch(CategoryListUrl);

    const onChooseCategory = title => {
        navigation.navigate('Meals', {title})
    }

    const renderingItem = ({ item }) => <CategoryCard onChooseCategory={onChooseCategory} category={item} />

    if(error){
        return <Error />
    }

    if(loading){
        return <Loading />
    }

    return (
        <FlatList
            data={data.categories}
            renderItem={renderingItem}
            keyExtractor={item => item.idCategory}
            style={styles.container}
        />
    )
}

export default Categories;