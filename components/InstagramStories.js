import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// Perubahan ada di baris ini
import { LinearGradient } from 'expo-linear-gradient';

const initialStoriesData = [
    // ... (Data tetap sama, tidak perlu diubah)
    { id: 'me', username: 'Cerita Anda', avatarUrl: 'https://i.pravatar.cc/150?u=me', isMe: true },
    { id: '1', username: 'budi_susanto', avatarUrl: 'https://i.pravatar.cc/150?u=user1', isSeen: false },
    { id: '2', username: 'citra.lestari', avatarUrl: 'https://i.pravatar.cc/150?u=user2', isSeen: false },
    { id: '3', username: 'dewi.persik', avatarUrl: 'https://i.pravatar.cc/150?u=user3', isSeen: true },
    { id: '4', username: 'eko_patrio', avatarUrl: 'https://i.pravatar.cc/150?u=user4', isSeen: false },
    { id: '5', username: 'fitriana_sari', avatarUrl: 'https://i.pravatar.cc/150?u=user5', isSeen: false },
    { id: '6', username: 'ganjar_pranowo', avatarUrl: 'https://i.pravatar.cc/150?u=user6', isSeen: false },
];

const InstagramStories = () => {
  const [stories, setStories] = useState(initialStoriesData);

  const onStoryPress = (item) => {
    if (item.isMe) return;
    const updatedStories = stories.map(story => {
      if (story.id === item.id) {
        return { ...story, isSeen: true };
      }
      return story;
    });
    setStories(updatedStories);
  };

  const renderStoryItem = ({ item }) => {
    const storyContainerStyle = 
      item.isMe ? styles.yourStoryContainer : 
      item.isSeen ? styles.seenStoryContainer : styles.storyContainer;

    return (
      <TouchableOpacity 
        style={styles.storyWrapper} 
        onPress={() => onStoryPress(item)}
        activeOpacity={0.7}
      >
        {!item.isSeen && !item.isMe ? (
          // Tidak ada perubahan di sini, komponennya tetap bernama LinearGradient
          <LinearGradient
            colors={['#FEDA75', '#FA7E1E', '#D62976', '#962FBF', '#4F5BD5']}
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 0.0 }}
            style={storyContainerStyle}
          >
            <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
          </LinearGradient>
        ) : (
          <View style={storyContainerStyle}>
            <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
          </View>
        )}
        {item.isMe && (
          <View style={styles.plusIconContainer}>
            <Text style={styles.plusIconText}>+</Text>
          </View>
        )}
        <Text style={styles.username}>{item.username.length > 11 ? item.username.substring(0, 10) + '...' : item.username}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        renderItem={renderStoryItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 10 }}
      />
    </View>
  );
};

// Stylesheet tetap sama, tidak ada perubahan
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  storyWrapper: {
    alignItems: 'center',
    marginRight: 15,
  },
  storyContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  seenStoryContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: '#dbdbdb',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  yourStoryContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  avatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: '#fff',
  },
  username: {
    fontSize: 12,
    color: '#262626',
  },
  plusIconContainer: {
    position: 'absolute',
    bottom: 25,
    right: 0,
    backgroundColor: '#3897f0',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  plusIconText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 18,
  },
});

export default InstagramStories;