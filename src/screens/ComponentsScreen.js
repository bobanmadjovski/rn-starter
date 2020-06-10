import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponetsScreen = () => {
    const myName = 'Boban';

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.subHeader}>My name is {myName} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeader: {
        fontSize: 20
    }
});

export default ComponetsScreen;