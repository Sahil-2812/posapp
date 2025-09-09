import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BottomLine from "../../components/BottomLine";

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("Login");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/splash.png")} // apni image ka path
                style={styles.logo}
            />
            {/* Bottom decorative line */}
            <BottomLine bottom={10} />
        </View>

    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    logo: {
        marginBottom: 20,
        width: 223.23028564453125,
        height: 201.9702606201172,
    },

});
