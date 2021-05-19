import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({category, onChooseCategory}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onChooseCategory(category.strCategory)}>
            <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
            <Text style={styles.text}>
                {category.strCategory}
            </Text>
        </TouchableOpacity>
    )
}

export default CategoryCard;