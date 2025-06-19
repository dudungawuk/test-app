import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const storiesData = [
  { id: '1', username: 'budi_s', color: getRandomColor() },
  { id: '2', username: 'citra_l', color: getRandomColor() },
  { id: '3', username: 'dewi_p', color: getRandomColor() },
  { id: '4', username: 'eko_p', color: getRandomColor() },
  { id: '5', username: 'budi_s', color: getRandomColor() },
  { id: '6', username: 'citra_l', color: getRandomColor() },
  { id: '7', username: 'dewi_p', color: getRandomColor() },
  { id: '8', username: 'eko_p', color: getRandomColor() },
];

const postsData = [
  { id: 'post1', username: 'budi_santoso', avatarColor: getRandomColor(), postColor: getRandomColor(), caption: 'Pemandangan dari atas bukit. #travel' },
  { id: 'post2', username: 'citra_lestari', avatarColor: getRandomColor(), postColor: getRandomColor(), caption: 'Kopi sore ini. ☕️' },
  { id: 'post3', username: 'dewi_persik', avatarColor: getRandomColor(), postColor: getRandomColor(), caption: 'Kucing baru!' },
];

const Stories = () => (
  <View style={styles.storiesContainer}>
    <FlatList data={storiesData} keyExtractor={item => item.id} horizontal={true} showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.storyItem}>
          <View style={[styles.storyAvatar, { backgroundColor: item.color }]} />
          <Text style={styles.storyUsername}>{item.username}</Text>
        </View>
      )}
    />
  </View>
);

const Post = ({ post }) => (
  <View style={styles.postContainer}>
    <View style={styles.postHeader}>
      <View style={[styles.postAvatar, { backgroundColor: post.avatarColor }]} />
      <Text style={styles.postUsername}>{post.username}</Text>
    </View>
    <View style={[styles.postImage, { backgroundColor: post.postColor }]} />
    <View style={styles.postFooter}>
      <Text style={styles.postCaption}><Text style={{ fontWeight: 'bold' }}>{post.username}</Text> {post.caption}</Text>
    </View>
  </View>
);

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text style={styles.header}>DoaIbuGram</Text>
      <FlatList
        data={postsData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Post post={item} />}
        ListHeaderComponent={Stories}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 28, fontWeight: 'bold', fontFamily: 'Cochin', paddingHorizontal: 15, paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: '#dbdbdb' },
  storiesContainer: { paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: '#dbdbdb', marginBottom: 10 },
  storyItem: { alignItems: 'center', marginHorizontal: 10 },
  storyAvatar: { width: 65, height: 65, borderRadius: 32.5, borderWidth: 2, borderColor: '#c7c7c7' },
  storyUsername: { fontSize: 12, marginTop: 5 },
  postContainer: { marginBottom: 20 },
  postHeader: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  postAvatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  postUsername: { fontWeight: 'bold', fontSize: 16 },
  postImage: { width: '100%', aspectRatio: 1 },
  postFooter: { padding: 10 },
  postCaption: { fontSize: 14 },
});