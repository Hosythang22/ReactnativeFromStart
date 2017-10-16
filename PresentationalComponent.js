import React, { Component } from 'react'
import {Text, View, StyleSheet } from 'react-native'

const PresentationalComponent = (props) => {
    return (
        <View>
            <Text style = {styles.style1} onPress = {props.updateState}>
                {props.myState}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    style1: {
        marginTop: 20,
        textAlign: 'center',
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default PresentationalComponent