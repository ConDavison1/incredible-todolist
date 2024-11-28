import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import MainLayout from "../layouts/MainLayout";



function AboutScreen({ navigation }) {


    return (
        <MainLayout>
            <Text style={styles.title}>About</Text>
            <Text style={styles.text}>App: Incredible TODO List</Text>
            <Text style={styles.text}>Creator: Connor Davison :)</Text>
            <View style={styles.button}>
                <Button
                    color="green"
                    title="Go to Home Screen"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>


        </MainLayout>
    );
};

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 20,
    },
    button: {
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        width: "20%",
        marginTop: 20,

    },
    text: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 24,
        marginBottom: 20,
    },
});

export default AboutScreen;
