import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import BottomLine from "../../components/BottomLine";

const Signup2 = () => {
  const handleContinue = () => {
    // Handle contact support action
    console.log("Contact support pressed");
  };

  return (
    <View style={styles.container}>
      {/* Main content container with border and margin */}
      <View style={styles.contentContainer}>
        <Image 
          source={require("../../assets/bottle.png")} 
          style={styles.bottleImage} 
        />
        
        <Text style={styles.approvalText}>Approval in Progress</Text>
        
        <Text style={styles.messageText}>
          Thank you for registering. Your account request has been submitted and is waiting for admin approval. You'll be notified once it's activated.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Contact support</Text>
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
    fontWeight: "600",
    fontSize: 24,
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
    
    backgroundColor: "#2D328E",
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

export default Signup2;