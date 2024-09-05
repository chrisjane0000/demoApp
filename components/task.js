import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.items}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    items: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'green',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
        fontSize: 24,
    },
    itemText: {
        maxWidth: '80%',
        fontSize: 20,
    },
    circular: {
        width: 20,
        height: 20,
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 5,
    }
    
});
export default Task;
