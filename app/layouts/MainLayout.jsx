import React from "react";
import { StyleSheet, View } from "react-native";

const MainLayout = ({ children }) => {
    return (
        <View style={styles.container}>
            <View>{children}</View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});
export default MainLayout;