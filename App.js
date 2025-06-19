import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';

const storiesData = [
  { id: '1', username: 'budi_s', avatarUrl: 'https://i.pravatar.cc/150?u=user1' },
  { id: '2', username: 'citra_l', avatarUrl: 'https://i.pravatar.cc/150?u=user2' },
  { id: '3', username: 'dewi_p', avatarUrl: 'https://i.pravatar.cc/150?u=user3' },
  { id: '4', username: 'eko_p', avatarUrl: 'https://i.pravatar.cc/150?u=user4' },
  { id: '5', username: 'fitri_s', avatarUrl: 'https://i.pravatar.cc/150?u=user5' },
  { id: '6', username: 'ganjar_p', avatarUrl: 'https://i.pravatar.cc/150?u=user6' },
  { id: '7', username: 'hadi_p', avatarUrl: 'https://i.pravatar.cc/150?u=user7' },
];

const postsData = [
  {
    id: 'post1',
    username: 'budi_santoso',
    avatarUrl: 'https://i.pravatar.cc/150?u=user1',
    imageUrl: 'https://picsum.photos/seed/post1/500/500',
    caption: 'Pemandangan dari atas bukit. #travel',
  },
  {
    id: 'post2',
    username: 'citra_lestari',
    avatarUrl: 'https://i.pravatar.cc/150?u=user2',
    imageUrl: 'https://picsum.photos/seed/post2/500/500',
    caption: 'Kopi sore ini. ☕️',
  },
  {
    id: 'post3',
    username: 'dewi_persik',
    avatarUrl: 'https://i.pravatar.cc/150?u=user3',
    imageUrl: 'https://picsum.photos/seed/post3/500/500',
    caption: 'Kucing baru!',
  },
];

const Stories = () => (
  <View style={styles.storiesContainer}>
    <FlatList
      data={storiesData}
      keyExtractor={item => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.storyItem}>
          <Image source={{ uri: item.avatarUrl }} style={styles.storyAvatar} />
          <Text style={styles.storyUsername}>{item.username}</Text>
        </View>
      )}
    />
  </View>
);

const Post = ({ post }) => (
  <View style={styles.postContainer}>
    <View style={styles.postHeader}>
      <Image source={{ uri: post.avatarUrl }} style={styles.postAvatar} />
      <Text style={styles.postUsername}>{post.username}</Text>
    </View>
    <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
    <View style={styles.postFooter}>
      <Text style={styles.postCaption}>
        <Text style={{ fontWeight: 'bold' }}>{post.username}</Text> {post.caption}
      </Text>
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>DoaIbuGram</Text>
      <FlatList
        data={postsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Post post={item} />}
        ListHeaderComponent={Stories}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  storiesContainer: {
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
    marginBottom: 10,
  },
  storyItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  storyAvatar: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    borderWidth: 2,
    borderColor: '#c7c7c7',
  },
  storyUsername: {
    fontSize: 12,
    marginTop: 5,
  },
  postContainer: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  postAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  postUsername: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  postFooter: {
    padding: 10,
  },
  postCaption: {
    fontSize: 14,
  },
});

export default App;