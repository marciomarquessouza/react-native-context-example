import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    const { data, addPost } = useContext(BlogContext);
    return (
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Post" onPress = { addPost }/>
            <FlatList
                data = { data }
                keyExtractor = { (post) => post.title }
                renderItem = { ({ item }) => (
                    <Text>{ item.title }</Text>
                )} 
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default IndexScreen;
