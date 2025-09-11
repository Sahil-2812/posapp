import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WaterRequest = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.header}>
                    {/* ✅ Back Button with navigation */}
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}   // 👈 back to Home
                    >
                        <Image
                            source={require('../../assets/back.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>

                    <Text style={styles.headerTitle}>Request Water Delivery</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.subHeader}>Select Your Bottles</Text>
                    <Text style={styles.description}>Select the type and quantity you want delivered.</Text>

                    <View style={styles.bottleContainer}>
                        {/* Dispenser Gallon */}
                        <View style={styles.bottleItem}>
                            <Image
                                source={require('../../assets/dispenserGallon.png')} // Dispenser Gallon Image
                                style={styles.bottleImage}
                            />
                            <Text style={styles.bottleTitle}>Dispenser Gallon (Blue)</Text>
                            <Text style={styles.bottleSubHeading}>For water dispensers</Text>

                            <View style={styles.priceRow}>
                                <Text style={styles.priceNumber}>100</Text>
                                <Text style={styles.priceCurrency}>Rs.</Text>
                            </View>
                            <TouchableOpacity style={styles.addButton}>
                                <Text style={styles.addButtonText}>Add bottle</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Normal Gallon */}
                        <View style={styles.bottleItem}>
                            <Image
                                source={require('../../assets/normalGallon.png')} // Normal Gallon Image
                                style={styles.bottleImage}
                            />
                            <Text style={styles.bottleTitle}>Normal Gallon (White)</Text>
                            <Text style={styles.bottleSubHeading}>For normal use</Text>
                            <View style={styles.priceRow}>
                                <Text style={styles.priceNumber}>50</Text>
                                <Text style={styles.priceCurrency}>Rs.</Text>
                            </View>
                            <TouchableOpacity style={styles.addButton}>
                                <Text style={styles.addButtonText}>Add bottle</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 20,
    },
    scrollContainer: {
        flex: 1,
        marginHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        marginRight: 10,
    },
    icon: {
        width: 24,
        height: 24,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'semi-bold',
        color: '#09111F',
    },

    content: {
        marginBottom: 40,
    },
    subHeader: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 10,
    },
    description: {
        fontSize: 12,
        color: '#475569',
        marginBottom: 20,
    },
    bottleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottleItem: {
        width: 142.5,
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#dcdcdc',
        padding: 12,
        backgroundColor: '#f9f9f9',
        marginBottom: 20,
        
        
    },
    bottleImage: {
        width: 125,
        height: 95,
        resizeMode: 'contain',
        marginBottom: 12,
    },
    bottleTitle: {
        fontSize: 9,
        fontWeight: '900',
        marginBottom: 8,
          alignSelf: 'flex-start',
    },

    addButton: {
        backgroundColor: '#3BA7FF',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    addButtonText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
        
    },
    bottleSubHeading: {
        fontSize: 10,
        color: '#475569',
        marginBottom: 6,
          alignSelf: 'flex-start',
        
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'flex-end', // 👈 "rs" thoda neeche chala jayega (subscript look)
        alignSelf: 'flex-start', // 👈 Left side me aa jayega
        marginBottom: 12,
    },

    priceNumber: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },

    priceCurrency: {
        fontSize: 10, // chhota font (subscript look)
        marginLeft: 2,
        color: '#555',
    },

});

export default WaterRequest;
