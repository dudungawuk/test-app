import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, View } from 'react-native';

import AppHeader from './components/AppHeader';
import InstagramStories from './components/InstagramStories';
import Post from './components/Post';
import BottomTabBar from './components/BottomTabBar';

// Tambahkan jumlah comment dummy
const postsData = [
  {
    id: 'post1',
    username: 'budi_santoso',
    avatarUrl: 'https://i.pravatar.cc/150?u=user1',
    postImageUrl: 'https://picsum.photos/seed/picsum1/400/400',
    likes: 1234,
    caption: 'Menikmati pemandangan alam yang indah! 🌿☀️ #nature #travel',
    comments: 15,
    timestamp: '2 hours ago',
  },
  {
    id: 'post2',
    username: 'citra.lestari',
    avatarUrl: 'https://i.pravatar.cc/150?u=user2',
    postImageUrl: 'https://picsum.photos/seed/picsum2/400/400',
    likes: 567,
    caption: 'Makan siang hari ini. Enak banget!',
    comments: 8,
    timestamp: '5 hours ago',
  },
  {
    id: 'post3',
    username: 'dewi.persik',
    avatarUrl: 'https://i.pravatar.cc/150?u=user3',
    postImageUrl: 'https://picsum.photos/seed/picsum3/400/400',
    likes: 890,
    caption: 'My new puppy! 🐶❤️',
    comments: 23,
    timestamp: '1 day ago',
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader />
      <View style={styles.contentContainer}>
        <FlatList
          data={postsData}
          renderItem={({ item }) => <Post post={item} />}
          keyExtractor={item => item.id}
          ListHeaderComponent={InstagramStories} // Stories tetap di atas feed
          showsVerticalScrollIndicator={false}
        />
      </View>
      <BottomTabBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1, // Pastikan FlatList mengisi ruang yang tersedia
  },
});

export default App;