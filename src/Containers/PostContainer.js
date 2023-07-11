import React from 'react';
import PostList from '../Components/PostList';
import PostForm from '../Components/PostForm';

const PosContainer = () => {
    return(
        <div>
            <PostForm/>
            <PostList/>
        </div>
    )
}

export default PosContainer;