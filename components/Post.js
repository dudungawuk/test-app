import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons'; // Ganti ke Feather

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image source={{ uri: post.avatarUrl }} style={styles.avatar} />
          <Text style={styles.username}>{post.username}</Text>
        </View>
        <Feather name="more-horizontal" size={24} color="#262626" />
      </View>

      {/* Gambar Postingan */}
      <Image source={{ uri: post.postImageUrl }} style={styles.postImage} />

      {/* Action Bar */}
      <View style={styles.actionBar}>
        <View style={styles.leftIcons}>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={28} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={28} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="paper-plane-outline" size={28} style={styles.icon} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Feather name="bookmark" size={28} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Likes & Caption */}
      <View style={styles.infoContainer}>
        <Text style={styles.likes}>{post.likes.toLocaleString()} likes</Text>
        <View style={styles.captionContainer}>
          <Text style={styles.caption}>
            <Text style={styles.username}>{post.username}</Text>
            {' '}{post.caption}
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.comments}>View all {post.comments} comments</Text>
        </TouchableOpacity>
        <Text style={styles.timestamp}>{post.timestamp}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    color: '#262626',
    fontSize: 14,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  leftIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 16,
    color: '#262626',
  },
  infoContainer: {
    paddingHorizontal: 12,
  },
  likes: {
    fontWeight: 'bold',
    color: '#262626',
    fontSize: 14,
  },
  captionContainer: {
    marginTop: 4,
  },
  caption: {
    color: '#262626',
    fontSize: 14,
    lineHeight: 18,
  },
  comments: {
    color: '#8e8e8e',
    marginTop: 4,
  },
  timestamp: {
    marginTop: 4,
    fontSize: 12,
    color: '#8e8e8e',
    paddingBottom: 10,
  },
});

export default Post;