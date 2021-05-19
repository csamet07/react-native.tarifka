import React from 'react';
import {
    View
} from 'react-native';
import LottieView from 'lottie-react-native';

const Error = () => {
    return <LottieView source={require('../../assets/error.json')}></LottieView>
}

export default Error;