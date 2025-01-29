import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPostList: () => {},
  deletePostList: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  
  if (action.type === "ADD_POST") {
    const newPost = {
      id: Date.now().toString(),
      ...action.payload,
    };
    newPostList = [newPost, ...currPostList];
  } else if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi friends,I am going to Mumbai for my vacation.Hope to enjoy a lot.Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["#vacation", "#enjoying", "#mumbai"],
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
  },
  {
    id: "2",
    title: "New challenge",
    body: "Hi friends,I am here with a new challenge..revealing it soon..STAY TUNE",
    reactions: 5,
    userId: "user-12",
    tags: ["#challenge", "#exciting", "#staytune"],
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2",
  },
];

export default PostListProvider;
