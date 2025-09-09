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
                            style={styles.input}
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
        fontFamily: "Inter",         // font-family Inter
        fontWeight: "600",           // semi-bold
        fontSize: 16,                // 16px
        lineHeight: 16,              // 100% of font size
        letterSpacing: 0,            // 0%
        color: "#09111F",
        width: 335,                  // fixed width from Figma
        height: 19,                  // fixed height from Figma
        textAlignVertical: "center", // vertical-align middle
        opacity: 1,                  // fully visible
        marginTop: 130,               // optional spacing from image
        marginBottom: 20,            // spacing before OTP inputs
    },
    otpWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "80%",
        marginBottom: 30, // Button ke liye thodi space
    },
    inputContainer: {
        width: 50,
        alignItems: "center",
    },
    input: {
        fontSize: 20,
        height: 50,
    },
    underline: {
        width: "100%",
        height: 2,
        backgroundColor: "#ccc",
        marginTop: 5,
        borderRadius: 1,
    },
    underlineFocused: {
        backgroundColor: "#2D328E",
    },
    button: {
        backgroundColor: "#2D328E",
        paddingVertical: 10,
        paddingHorizontal: 8,
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
