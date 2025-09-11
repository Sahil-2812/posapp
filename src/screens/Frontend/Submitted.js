import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import BottomLine from "../../components/BottomLine";

const Submitted = ({ navigation }) => { 
  const handleContinue = () => {
    console.log("Contact support pressed");
    navigation.navigate("Home"); // Navigate to Home screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image 
          source={require("../../assets/Droplets.png")} 
          style={styles.bottleImage} 
        />
        
        <Text style={styles.approvalText}>Delivery Request Submitted</Text>
        
        <Text style={styles.messageText}>
Your request for 3 bottles has been sent.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Go Back Home</Text>
        </TouchableOpacity>
      </View>
      
      {/* Bottom decorative line */}
      <BottomLine bottom={10} />
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    width: 335,
    height: 363,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#E3E3E3",
    paddingTop: 20,
    paddingRight: 16,
    paddingBottom: 20,
    paddingLeft: 16,
    gap: 20,
    opacity: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: (screenWidth - 335) / 2 - 20, // Calculate margin for 20px spacing
  },
  bottleImage: {
    width: 174,
    height: 150,
    opacity: 1,
  },
  approvalText: {
    fontFamily: "Inter",
    fontWeight: "700",
    fontSize: 26,
    lineHeight: 24,
    textAlign: "center",
    color: "#000",
  },
  messageText: {
    fontFamily: "Inter",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 12,
    textAlign: "center",
    color: "#000",
    maxWidth: 300,
  },
  button: {
    
    backgroundColor: "#5B63E5",
    paddingVertical: 10,
    borderRadius: 8,
    width: "100%",
    maxWidth: 300,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
});

export default Submitted;