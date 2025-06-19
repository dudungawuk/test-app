import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>DoaIbuGram</Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="plus-square" size={26} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="send" size={26} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  logo: {
    // Gunakan nama font yang sudah kita daftarkan di App.js
    fontFamily: 'GrandHotel-Regular',
    fontSize: 32, // Ukuran font bisa lebih besar karena gayanya unik
  },
  actions: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 20,
  },
});

export default AppHeader;