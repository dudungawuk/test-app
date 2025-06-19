import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Foundation, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const BottomTabBar = () => {
  // Ganti dengan URL gambar profil Anda
  const profileImageUrl = 'https://i.pravatar.cc/150?u=me'; 

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Foundation name="home" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="search" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name="movie-open-play-outline" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons name="shopping-outline" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={{ uri: profileImageUrl }} style={styles.profileIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderTopColor: '#dbdbdb',
    paddingBottom: 5, // Sedikit padding untuk tampilan lebih baik
  },
  profileIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default BottomTabBar;