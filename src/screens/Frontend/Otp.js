import React, { useRef, useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import BottomLine from "../../components/BottomLine";

const OtpScreen = ({ navigation }) => {
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [focusedIndex, setFocusedIndex] = useState(null);
    const inputs = useRef([]);

    const handleChange = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Auto-focus next field
        if (text && index < inputs.current.length - 1) {
            inputs.current[index + 1].focus();
        }
    };

    const handleContinue = () => {
        // OTP validation logic yaha add karo
        const enteredOtp = otp.join("");
        console.log("Entered OTP:", enteredOtp);

        // Navigate to Signup screen
        navigation.navigate("Signup"); // yaha "Signup" aapke SignupScreen ka naam hai jo Stack me registered hai
    };

    return (
        <View style={styles.container}>
            <Image source={require("../../assets/splash.png")} style={styles.logo} />

            <Text style={styles.label}>Enter 4-digits code sent to your number</Text>

            <View style={styles.otpWrapper}>
                {otp.map((value, index) => (
                    <View key={index} style={styles.inputContainer}>
                        <TextInput
                            ref={(ref) => (inputs.current[index] = ref)}
                            value={value}
                            onChangeText={(text) => handleChange(text, index)}
                            keyboardType="number-pad"
                            maxLength={1}
                            style={[
                                styles.input,
                                focusedIndex === index && styles.inputFocused,
                            ]}
                            textAlign="center"
                            onFocus={() => setFocusedIndex(index)}
                            onBlur={() => setFocusedIndex(null)}
                        />
                        <View
                            style={[
                                styles.underline,
                                focusedIndex === index && styles.underlineFocused,
                            ]}
                        />
                    </View>
                ))}
            </View>

            {/* Continue Button */}
            <TouchableOpacity style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>

            {/* Bottom decorative line */}
            <BottomLine bottom={10} />
        </View>
    );
};

export default OtpScreen;

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
    label: {
        fontFamily: "Inter",
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: 0,
        color: "#09111F",
        width: 335,
        height: 19,
        textAlignVertical: "center",
        opacity: 1,
        marginTop: 130,
        marginBottom: 20,
    },
    otpWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        marginBottom: 30,
    },
    inputContainer: {
        width: 50,
        alignItems: "center",
    },
    input: {
        fontSize: 28,          // Bigger font size for OTP input
        height: 60,            // Taller input field
        width: 60,             // Equal width for each input field
        borderRadius: 8,       // Rounded corners for inputs
        borderWidth: 2,        // Border thickness
        borderColor: "#dcdcdc", // Default border color
    },
    inputFocused: {
        borderColor: "#2D328E", // Border color when focused
    },
    underline: {
        width: "100%",
        height: 2,
        backgroundColor: "#ccc",
        marginTop: 5,
        borderRadius: 1,
    },
    underlineFocused: {
        backgroundColor: "#2D328E", // Change to blue when focused
    },
    button: {
        backgroundColor: "#2D328E",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 20,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
        textAlign: "center",
    },
});
