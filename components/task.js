import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Task = (props) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(props.text);

    const handleCompleteTask = () => {
        setIsCompleted(!isCompleted);
    };

    const handleDeleteTask = () => {
        props.onDelete();
    };

    const handleEditTask = () => {
        setIsEditing(true);
    };

    const handleSaveEdit = () => {
        props.onEdit(editText);
        setIsEditing(false);
    };

    return (
        <View style={styles.items}>
            <TouchableOpacity onPress={handleCompleteTask} style={styles.checkboxWrapper}>
                <View style={[styles.checkbox, isCompleted && styles.checkboxChecked]}>
                    {isCompleted && <Text style={styles.checkmark}>✔</Text>}
                </View>
            </TouchableOpacity>
            <View style={styles.itemTextWrapper}>
                {isEditing ? (
                    <TextInput
                        style={[styles.itemText, styles.editInput]}
                        value={editText}
                        onChangeText={setEditText}
                    />
                ) : (
                    <Text style={[styles.itemText, isCompleted && styles.itemTextCompleted]}>
                        {props.text}
                    </Text>
                )}
            </View>
            {isEditing ? (
                <TouchableOpacity onPress={handleSaveEdit} style={styles.saveButton}>
                    <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={handleEditTask} style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
            )}
            <TouchableOpacity onPress={handleDeleteTask} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

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
    checkboxWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 25, 
        height: 25, 
        borderColor: '#865c4e',
        borderWidth: 2,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6AE63',
    },
    checkboxChecked: {
        backgroundColor: '#865c4e',
    },
    checkmark: {
        color: 'red',
        fontSize: 15, 
    },
    itemTextWrapper: {
        flex: 1,
        marginLeft: 10,
    },
    itemText: {
        maxWidth: '100%',
        fontSize: 20,
    },
    itemTextCompleted: {
        textDecorationLine: 'line-through',
        color: '#865c4e',
    },
    editInput: {
        fontSize: 18,
        borderBottomColor: '#865c4e',
        borderBottomWidth: 1,
    },
    editButton: {
        backgroundColor: '#f6ae63',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    editButtonText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: '#d9534f',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    saveButton: {
        backgroundColor: '#5bc0de',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    saveButtonText: {
        color: 'white',
        fontSize: 16,
    },
    deleteButton: {
        backgroundColor: '#d9534f',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Task;
