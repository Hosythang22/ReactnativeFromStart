/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import ScrollViewExample from './source/ScrollViewExample.js'
import Inputs from './source/Inputs.js'
import {View} from 'react-native';

const HelloWorldApp = () => {
    return (
        <View>
            <Inputs />
            <ScrollViewExample />
        </View>

    );
}

export default HelloWorldApp