import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Task = (props) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleCompleteTask = () => {
        setIsCompleted(!isCompleted);
        if (isCompleted) {
            props.onDeleteTask();
        }
    };

    return (
        <View style={styles.items}>
            <View style={styles.itemLeft}>
                <Text style={[styles.itemText, isCompleted && styles.itemTextCompleted]}>
                    {props.text}
                </Text>
            </View>
            <TouchableOpacity onPress={handleCompleteTask}>
                <View style={[styles.circular, isCompleted && styles.circularCompleted]}></View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    items: {
        backgroundColor: '#F6AE63',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderColor: '#865c4e',
        borderWidth: 2,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemText: {
        maxWidth: '100%',
        fontSize: 20,
    },
    itemTextCompleted: {
        textDecorationLine: 'line-through',
        color: '#865c4e',
    },
    circular: {
        width: 20,
        height: 20,
        borderColor: '#865c4e',
        borderWidth: 2,
        borderRadius: 5,
    },
    circularCompleted: {
        backgroundColor: '#865c4e',
    }
});

export default Task;
