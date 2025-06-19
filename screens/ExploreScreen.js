import React, { useMemo } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const createDummyPosts = (count = 30) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `post_${i}`,
    color: getRandomColor(),
  }));
};

const dummyPosts = createDummyPosts();

const { width } = Dimensions.get('window');
const GAP = 2;
const SMALL_ITEM_SIZE = (width - GAP * 2) / 3;
const BIG_ITEM_SIZE = SMALL_ITEM_SIZE * 2 + GAP;

const generateExploreRows = (posts) => {
  const rows = [];
  let i = 0;
  while (i < posts.length) {
    if (i % 9 === 0) {
      if (posts[i + 2]) {
        rows.push({
          id: `row_${i}`,
          type: 'BIG_RIGHT',
          items: [posts[i], posts[i+1], posts[i+2]],
        });
        i += 3;
        continue;
      }
    }
    if (posts[i + 2]) {
      rows.push({
        id: `row_${i}`,
        type: 'THREE_SMALL',
        items: [posts[i], posts[i + 1], posts[i + 2]],
      });
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
    if (item.type === 'BIG_RIGHT') {
      return (
        <View style={styles.row}>
          <View style={styles.column}>
            <TouchableOpacity>
              <View style={[styles.itemSmall, { backgroundColor: item.items[0].color }]} />
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.itemSmall, { backgroundColor: item.items[1].color }]} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View style={[styles.itemBig, { backgroundColor: item.items[2].color }]} />
          </TouchableOpacity>
        </View>
      );
    }
    
    return (
      <View style={styles.row}>
        {item.items.map(post => (
          <TouchableOpacity key={post.id}>
            <View style={[styles.itemSmall, { backgroundColor: post.color }]} />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore</Text>
      <FlatList
        data={exploreDataRows}
        renderItem={renderRow}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: GAP,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginRight: GAP 
  },
  itemSmall: {
    width: SMALL_ITEM_SIZE,
    height: SMALL_ITEM_SIZE,
  },
  itemBig: {
    width: BIG_ITEM_SIZE,
    height: BIG_ITEM_SIZE,
  },
});