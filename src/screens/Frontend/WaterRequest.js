import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomLine from "../../components/BottomLine";

const WaterRequest = () => {
    const navigation = useNavigation();

    // ✅ Prices
    const dispenserPrice = 100;
    const normalPrice = 50;

    // ✅ State for quantities (0 = not added yet)
    const [dispenserQty, setDispenserQty] = useState(0);
    const [normalQty, setNormalQty] = useState(0);

    // ✅ Calculations
    const total = dispenserQty * dispenserPrice + normalQty * normalPrice;
    const totalBottles = dispenserQty + normalQty;

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.header}>
                    {/* ✅ Back Button */}
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/back.png')} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Request Water Delivery</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.subHeader}>Select Your Bottles</Text>
                    <Text style={styles.description}>
                        Select the type and quantity you want delivered.
                    </Text>

                    <View style={styles.bottleContainer}>
                        {/* Dispenser Gallon */}
                        <View style={styles.bottleItem}>
                            <Image
                                source={require('../../assets/dispenserGallon.png')}
                                style={styles.bottleImage}
                            />
                            <Text style={styles.bottleTitle}>Dispenser Gallon (Blue)</Text>
                            <Text style={styles.bottleSubHeading}>For water dispensers</Text>

                            <View style={styles.priceRow}>
                                <Text style={styles.priceNumber}>{dispenserPrice}</Text>
                                <Text style={styles.priceCurrency}>Rs.</Text>
                            </View>

                            {dispenserQty === 0 ? (
                                <TouchableOpacity
                                    style={styles.addButton}
                                    onPress={() => setDispenserQty(1)}
                                >
                                    <Text style={styles.addButtonText}>Add bottle</Text>
                                </TouchableOpacity>
                            ) : (
                                <View style={styles.counterContainer}>
                                    <TouchableOpacity
                                        style={styles.counterBtn}
                                        onPress={() => setDispenserQty(Math.max(0, dispenserQty - 1))}
                                    >
                                        <Text style={styles.counterBtnText}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.counterValue}>{dispenserQty}</Text>
                                    <TouchableOpacity
                                        style={styles.counterBtn}
                                        onPress={() => setDispenserQty(dispenserQty + 1)}
                                    >
                                        <Text style={styles.counterBtnText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>

                        {/* Normal Gallon */}
                        <View style={styles.bottleItem}>
                            <Image
                                source={require('../../assets/normalGallon.png')}
                                style={styles.bottleImage}
                            />
                            <Text style={styles.bottleTitle}>Normal Gallon (White)</Text>
                            <Text style={styles.bottleSubHeading}>For normal use</Text>

                            <View style={styles.priceRow}>
                                <Text style={styles.priceNumber}>{normalPrice}</Text>
                                <Text style={styles.priceCurrency}>Rs.</Text>
                            </View>

                            {normalQty === 0 ? (
                                <TouchableOpacity
                                    style={styles.addButton}
                                    onPress={() => setNormalQty(1)}
                                >
                                    <Text style={styles.addButtonText}>Add bottle</Text>
                                </TouchableOpacity>
                            ) : (
                                <View style={styles.counterContainer}>
                                    <TouchableOpacity
                                        style={styles.counterBtn}
                                        onPress={() => setNormalQty(Math.max(0, normalQty - 1))}
                                    >
                                        <Text style={styles.counterBtnText}>-</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.counterValue}>{normalQty}</Text>
                                    <TouchableOpacity
                                        style={styles.counterBtn}
                                        onPress={() => setNormalQty(normalQty + 1)}
                                    >
                                        <Text style={styles.counterBtnText}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    </View>
                </View>

                {/* ✅ Show Summary only if something is added */}
                {totalBottles > 0 && (
                    <View style={styles.summaryContainer}>
                        {dispenserQty > 0 && (
                            <View style={styles.summaryRow}>
                                <Image
                                    source={require('../../assets/dispenserGallon.png')}
                                    style={styles.smallImage}
                                />
                                <Text style={styles.summaryText}>Dispenser Gallon (Blue)</Text>
                                <Text style={styles.summaryPrice}>
                                    {dispenserQty} x {dispenserPrice}
                                </Text>
                            </View>
                        )}

                        {normalQty > 0 && (
                            <View style={styles.summaryRow}>
                                <Image
                                    source={require('../../assets/normalGallon.png')}
                                    style={styles.smallImage}
                                />
                                <Text style={styles.summaryText}>Normal Gallon (White)</Text>
                                <Text style={styles.summaryPrice}>
                                    {normalQty} x {normalPrice}
                                </Text>
                            </View>
                        )}

                        <View style={styles.footerRow}>
                            <Text style={styles.totalText}>Total: {total} Rs.</Text>
                            <TouchableOpacity
                                style={styles.confirmBtn}
                                onPress={() => navigation.navigate("Submitted")}  // 👈 navigate to Submitted.js
                            >
                                <Text style={styles.confirmBtnText}>
                                    Confirm {totalBottles} Bottles
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                )}
            </ScrollView>

            {/* Decorative line */}
            <BottomLine bottom={10} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#ffffff', paddingTop: 20 },
    scrollContainer: { flex: 1, marginHorizontal: 16 },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    backButton: { marginRight: 10 },
    icon: { width: 24, height: 24 },
    headerTitle: { fontSize: 16, fontWeight: '600', color: '#09111F' },

    content: { marginBottom: 20 },
    subHeader: { fontSize: 24, fontWeight: '600', marginBottom: 10 },
    description: { fontSize: 12, color: '#475569', marginBottom: 20 },

    bottleContainer: { flexDirection: 'row', justifyContent: 'space-between' },
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
    bottleImage: { width: 125, height: 95, resizeMode: 'contain', marginBottom: 12 },
    bottleTitle: { fontSize: 9, fontWeight: '900', marginBottom: 8, alignSelf: 'flex-start' },
    bottleSubHeading: { fontSize: 10, color: '#475569', marginBottom: 6, alignSelf: 'flex-start' },

    priceRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        alignSelf: 'flex-start',
        marginBottom: 12,
    },
    priceNumber: { fontSize: 16, fontWeight: '600', color: '#333' },
    priceCurrency: { fontSize: 10, marginLeft: 2, color: '#555' },

    addButton: {
        backgroundColor: '#3BA7FF',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    addButtonText: { color: '#fff', fontSize: 14, fontWeight: '600' },

    // Counter
    counterContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
    counterBtn: {
        backgroundColor: '#E6F0FF',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterBtnText: { color: '#09111F', fontSize: 18, fontWeight: 'bold' },
    counterValue: { marginHorizontal: 12, fontSize: 16, fontWeight: '600', color: '#09111F' },

    // Summary
    summaryContainer: {
        backgroundColor: '#F7F8FF',
        padding: 16,
        borderRadius: 8,
        marginTop: 10,
    },
    summaryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    smallImage: { width: 28, height: 28, resizeMode: 'contain', marginRight: 10 },
    summaryText: { flex: 1, fontSize: 14, color: '#09111F' },
    summaryPrice: { fontSize: 14, fontWeight: '600', color: '#333' },

    footerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
    },
    totalText: { fontSize: 16, fontWeight: '600', color: '#09111F' },
    confirmBtn: {
        backgroundColor: '#5B63E5',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
    confirmBtnText: { color: '#fff', fontSize: 14, fontWeight: '600' },
});

export default WaterRequest;
