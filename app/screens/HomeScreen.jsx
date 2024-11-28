import React, { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from "../layouts/MainLayout";

function HomeScreen({ navigation }) {

    const [tasks, setTasks] = useState(
        [
            'Do laundry',
            'Go to gym',
            'Walk dog'
        ]);

    const addTask = (taskText) => {
        setTasks([...tasks, taskText]);
    };

    return (
        <MainLayout>
            <Text style={styles.title}>TODO List</Text>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
            <View style={styles.button}>
                <Button
                    color="green"
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
            </View>
        </MainLayout>
    );
};

const styles = StyleSheet.create({


    title: {
        fontSize: 64,
        fontWeight: "bold",
        textAlign: "center",
    },
    button: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
        marginTop: 20,
    },
});


export default HomeScreen;
