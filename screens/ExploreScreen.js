import React, { useMemo } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const createDummyPosts = (count = 30) => Array.from({ length: count }, (_, i) => ({ id: `post_${i}`, imageUrl: `https://picsum.photos/seed/${i + 1}/500` }));
const dummyPosts = createDummyPosts();
const { width } = Dimensions.get('window');
const GAP = 2;
const SMALL_IMAGE_SIZE = (width - GAP * 2) / 3;
const BIG_IMAGE_SIZE = SMALL_IMAGE_SIZE * 2 + GAP;

const generateExploreRows = (posts) => {
  const rows = [];
  let i = 0;
  while (i < posts.length) {
    if (i % 9 === 0) {
      if (posts[i + 2]) {
        rows.push({ id: `row_${i}`, type: 'BIG_LEFT', items: [posts[i], posts[i + 1], posts[i + 2]] });
        i += 3;
        continue;
      }
    }
    if (posts[i + 2]) {
      rows.push({ id: `row_${i}`, type: 'THREE_SMALL', items: [posts[i], posts[i + 1], posts[i + 2]] });
      i += 3;
    } else {
      break;
    }
  }
  return rows;
};

export default function ExploreScreen() {
  const exploreDataRows = useMemo(() => generateExploreRows(dummyPosts), []);
  const renderRow = ({ item }) => {
    if (item.type === 'BIG_LEFT') {
      return (
        <View style={styles.row}>
          <TouchableOpacity><Image source={{ uri: item.items[0].imageUrl }} style={styles.imageBig} /></TouchableOpacity>
          <View style={styles.column}>
            <TouchableOpacity><Image source={{ uri: item.items[1].imageUrl }} style={styles.imageSmall} /></TouchableOpacity>
            <TouchableOpacity><Image source={{ uri: item.items[2].imageUrl }} style={styles.imageSmall} /></TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.row}>
        {item.items.map(post => <TouchableOpacity key={post.id}><Image source={{ uri: post.imageUrl }} style={styles.imageSmall} /></TouchableOpacity>)}
      </View>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Text style={styles.header}>Explore</Text>
      <FlatList data={exploreDataRows} renderItem={renderRow} keyExtractor={(item) => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 24, fontWeight: 'bold', paddingHorizontal: 15, paddingVertical: 10 },
  row: { flexDirection: 'row', marginBottom: GAP },
  column: { flexDirection: 'column', justifyContent: 'space-between', marginLeft: GAP },
  imageSmall: { width: SMALL_IMAGE_SIZE, height: SMALL_IMAGE_SIZE },
  imageBig: { width: BIG_IMAGE_SIZE, height: BIG_IMAGE_SIZE },
});