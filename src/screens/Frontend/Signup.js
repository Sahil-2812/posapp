import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import BottomLine from "../../components/BottomLine";
import { Picker } from "@react-native-picker/picker";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [house, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [colony, setColony] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = () => {
    console.log({ name, house, street, colony, password, confirmPassword });
    navigation.navigate("Signup2");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20, paddingTop: 20 }}
        keyboardShouldPersistTaps="handled"
      >
        <Image source={require("../../assets/splash.png")} style={styles.logo} />

        <View style={styles.form}>
          {/* Name */}
          <Text style={styles.label}>Your Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />

          {/* Address */}
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="House"
            value={house}
            onChangeText={setHouse}
          />
          <TextInput
            style={styles.input}
            placeholder="Street"
            value={street}
            onChangeText={setStreet}
          />

          {/* Colony Picker */}
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={colony}
              onValueChange={(itemValue) => setColony(itemValue)}
              mode="dropdown"
              dropdownIconColor="#2D328E"
            >
              <Picker.Item label="Select Colony" value="" color="#0f0101ff" />
              <Picker.Item label="Colony A" value="colonyA" />
              <Picker.Item label="Colony B" value="colonyB" />
              <Picker.Item label="Colony C" value="colonyC" />
            </Picker>
          </View>

          {/* Password */}
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon
                name={showPassword ? "eye" : "eye-off"}
                size={22}
                color="#2D328E"
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password */}
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm password"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Icon
                name={showConfirmPassword ? "eye-outline" : "eye-off"}
                size={22}
                color="#2D328E"
              />
            </TouchableOpacity>
          </View>

          {/* Signup Button */}
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Signup</Text>
          </TouchableOpacity>
        </View>

        <BottomLine bottom={10}/>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  logo: {
    width: 99,
    height: 89,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  form: {
    width: "100%",
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    marginTop: 8,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "ios" ? 8 : 6,
    marginBottom: 6,
    fontSize: 14,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    height: 35,
    justifyContent: "center",
    marginBottom: 6,
    overflow: "hidden",
  },
  picker: {
    width: "100%",
    height: "100%",
    color: "#000",
  },
  passwordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: "space-between",
    marginBottom: 4,
  },
  passwordInput: {
    flex: 1,
    fontSize: 14,
  },
  button: {
    backgroundColor: "#2D328E",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
});
