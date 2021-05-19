import React from 'react';
import {
    View
} from 'react-native';
import LottieView from 'lottie-react-native';

const Loading = () => {
    return <LottieView source={require('../../assets/loading.json')}></LottieView>
}

export default Loading;