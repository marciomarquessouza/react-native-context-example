import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {

    const [blogPosts, setBlogPosts] = useState([]);

    const addPost = () => {
        setBlogPosts([...blogPosts, { title: `Post # ${blogPosts.length + 1}`}]);
    }

    return (
        <BlogContext.Provider value={ { data: blogPosts, addPost } }>
            { children }
        </BlogContext.Provider>
    );
};

export default BlogContext;
