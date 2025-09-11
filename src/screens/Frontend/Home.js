import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, } from 'react-native';
import BottomLine from "../../components/BottomLine";

const Home = ({navigation}) => {



    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.header}>
                    <Text style={styles.greeting}>Hello, Ahmad 👋</Text>
                    <Text style={styles.date}>Wednesday, 3 Sept 2025</Text>


                </View>



                <View style={styles.rowContainer}>
                    <TouchableOpacity
                        style={styles.deliveryRequestContainer}
                        onPress={() => navigation.navigate("WaterRequest")}  // 👈 ab yeh chalega
                    >
                        <View style={styles.deliveryTextContainer}>
                            <Text style={styles.deliveryText}>Request Water</Text>
                            <Text style={styles.deliveryText}>Delivery</Text>
                        </View>
                        <Image
                            source={require("../../assets/Frame.png")}
                            style={styles.deliveryImage}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>


                    <View style={styles.statsContainer}>
                        <View style={styles.statBox}>
                            <Text style={styles.statValue}>08</Text>
                            <Text style={styles.statLabel}>Bottles received month</Text>
                        </View>
                        <View style={styles.statBox}>
                            <Text style={styles.statValue}>02</Text>
                            <Text style={styles.statLabel}>Bottles pending return</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.activityContainer}>
                    <Text style={styles.activityTitle}>09, Sep (Today)</Text>
                    <View style={[styles.activityItem, styles.activityItemBorder]}>
                        <Image
                            source={require("../../assets/Frame2.png")}
                            style={styles.icon} />
                        <Text style={styles.activityText}>+2 bottles received</Text>
                    </View>
                    <View style={[styles.activityItem, styles.activityItemBorder]}>
                        <Image
                            source={require("../../assets/Frame3.png")}
                            style={styles.icon} />
                        <Text style={styles.activityText}>2 bottles returned</Text>
                    </View>
                </View>

                <View style={styles.activityContainer}>
                    <Text style={styles.activityTitle}>08, Sep</Text>
                    <Text style={styles.noActivityText}>No activity</Text>
                </View>

                <View style={styles.activityContainer}>
                    <Text style={styles.activityTitle}>07, Sep</Text>
                    <View style={[styles.activityItem, styles.activityItemBorder]}>
                        <Image
                            source={require("../../assets/Frame2.png")}
                            style={styles.icon} />
                        <Text style={styles.activityText}>+2 bottles received</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navItem}>
                    <Image
                        source={require("../../assets/home.png")}
                        style={styles.navIcon}
                    />
                    <Text style={styles.navLabel1}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Image
                        source={require("../../assets/order.png")}
                        style={styles.navIcon}
                    />
                    <Text style={styles.navLabel}>Order</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Image
                        source={require("../../assets/wallet.png")}
                        style={styles.navIcon}
                    />
                    <Text style={styles.navLabel}>My Wallet</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Image
                        source={require("../../assets/profile.png")}
                        style={styles.navIcon}
                    />
                    <Text style={styles.navLabel}>Profile</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom decorative line */}
            <BottomLine bottom={10} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 0,
    },
    scrollContainer: {
        flex: 1,
    },
    header: {
        padding: 16,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 16,
        color: '#666',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        height: 200,
    },
    deliveryRequestContainer: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 20,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#dcdcdc',
        borderRadius: 8,
        padding: 10,

    },
    deliveryTextContainer: {
        alignItems: 'center',
        marginTop: 15,
        marginRight: 10,
    },
    deliveryText: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 20,
    },
    deliveryImage: {
        width: '100%',
        height: 100,
        marginBottom: 15,
    },
    statsContainer: {
        flex: 1,
        justifyContent: 'space-between',
        marginRight: 20,
        marginLeft: 10,
        alignItems: 'center',
    },
    statBox: {
        backgroundColor: '#E6F0FF',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginVertical: 4,
        alignItems: 'center',
        width: '100%',
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 12,
        color: '#888',
        textAlign: 'center',
    },
    activityContainer: {
        marginTop: 20,
        paddingLeft: 16,
    },
    activityTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    noActivityText: {
        fontSize: 12,
        color: '#888',
        marginTop: 6,
        marginLeft: 10,
    },
    activityItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        padding: 10,
    },
    activityItemBorder: {
        borderWidth: 1,
        borderColor: '#dcdcdc',
        borderRadius: 8,
        marginRight: 20,
        marginBottom: 19,

    },
    activityText: {
        fontSize: 16,
        marginLeft: 10,
        fontWeight: '500',
    },
    icon: {
        width: 20,
        height: 20,
        backgroundColor: '#E6F0FF',
        borderRadius: 4,
        padding: 4,
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',

    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,           // so all items share equal space
        paddingVertical: 4
    },
    navIcon: {
        width: 24,
        height: 24,
    },

    navLabel: {
        fontSize: 10,
        color: '#000',   // you can change color
        marginTop: 3,
        textAlign: 'center',
    },
    navLabel1: {
        fontSize: 10,
        color: '#1e2498ff',
        marginTop: 3,
        textAlign: 'center',

    },
});

export default Home;