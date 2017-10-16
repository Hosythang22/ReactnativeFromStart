import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Home extends Component {
    state = {
        myState: 'Fuck fuck',
        state1: 'Fuck 1'
    }

    updateState = () => this.setState({myState: 'Fuck your mother'})

    render() {
        return (
            <View>
                <Text onPress = {this.updateState}>
                    {this.state.myState}
                </Text>
                <Text>
                    {this.state.state1}
                </Text>
            </View>
        );
    }
}

export default Home;