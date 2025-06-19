import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Library ikon bawaan Expo

// Impor screen yang sudah kita buat
import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            // Jangan tampilkan header bawaan navigator
            headerShown: false, 
            
            // Atur warna ikon
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            
            // Sembunyikan label di bawah ikon
            tabBarShowLabel: false,

            // Fungsi untuk menampilkan ikon
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Explore') {
                iconName = focused ? 'search' : 'search-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          {/* Daftarkan screen Anda di sini */}
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Explore" component={ExploreScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});