import React, {Component} from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'

class List extends Component {
    state = {
        names: [
            {
                id: 0,
                name: 'Ben',
                age: 10
            },
            {
                id: 1,
                name: 'Susan',
                age: 11
            },
            {
                id: 3,
                name: 'Mai',
                age: 12
            },
            {
                id: 2,
                name: 'Robert',
                age: 9
            },
            {
                id: 5,
                name: 'Canh',
                age: 11
            },
            {
                id: 6,
                name: 'Canh1',
                age: 11
            },
            {
                id: 7,
                name: 'Canh2',
                age: 11
            },
            {
                id: 8,
                name: 'Canh3',
                age: 11
            },

            {
                id: 4,
                name: 'Thang',
            }
        ]
    }
    alertItemName = (item) => {
        alert(item.name + item.id)
    }

    render() {
        return (
            <View>{
                this.state.names.map((item1) => (
                    <TouchableOpacity
                        key = {item1.id}
                        style = {styles.container}
                        onPress = {() => this.alertItemName(item1)}>

                        <Text style = {styles.text}>
                            {item1.name}
                        </Text>
                        <Text style = {styles.text}>
                            {item1.id}
                        </Text>
                        <Text style = {styles.text}>
                            {'age ' + item1.age}
                        </Text>
                    </TouchableOpacity>
                ))
            }
            </View>
        )
    }
}

export default List

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#FFFF00',
        alignItems: 'center',
    },
    text: {
        color: '#ff0000'
    }
})


