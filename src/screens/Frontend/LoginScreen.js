import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import BottomLine from "../../components/BottomLine";

const LoginScreen = ({navigation}) => {
    const [phone, setPhone] = useState("");
    const [focused, setFocused] = useState(false);

      const handleContinue = () => {
        navigation.navigate("Otp"); // OTP screen par navigate
    };
    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image source={require("../../assets/splash.png")} style={styles.logo} />

            {/* Form Section */}
            <View style={styles.form}>
                <Text style={styles.label}>Enter your Phone number</Text>

                <View style={styles.inputWrapper}>
                    <Text style={styles.prefix}>+92</Text>

                    {/* User Input */}
                    <TextInput
                        style={[styles.input, focused && styles.inputFocused]}
                        placeholder="123456789"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleContinue}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
            {/* Bottom decorative line */}
            <BottomLine bottom={10} />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    logo: {
        width: 99,
        height: 89,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 40,
    },
    form: {
        width: 335,
        alignSelf: "center",
        marginTop: 80,
    },
    label: {
        fontSize: 16,
        fontWeight: "600",
        color: "#000",
        marginLeft: 30,
        marginBottom: 10,
    },
    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        marginLeft: 30,
        marginRight: 30,
        paddingHorizontal: 12,
        marginBottom: 32,
        paddingVertical: 8,
        gap: 2, 
    },
    prefix: {
        fontSize: 16,
        color: "#000",
        fontWeight: "900",
        marginRight: 6,
    },
    input: {
        flex: 1,
        fontSize: 16,
        lineHeight: 18,
        fontWeight: "300",               
        paddingVertical: 10,
        marginTop: 5,
        color: "#475569",
        borderRadius: 4,
        paddingVertical: 0,  
        marginTop: 3,
        includeFontPadding: false,
    },
    inputFocused: {
        fontWeight: "200",             
        color: "#2D328E",                 
    },
    button: {
        backgroundColor: "#2D328E",
        paddingVertical: 10,
        borderRadius: 8,
        marginLeft: 30,
        marginRight: 30,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
        textAlign: "center",
    },
});
