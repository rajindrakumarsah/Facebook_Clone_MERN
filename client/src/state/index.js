import { createSlice } from "@reduxjs/toolkit";

// it is used to make the changes funtion like dark and light mode
const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: { //funciton //action
    //set mode , dark to light and vice-versa
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      //create token when user login
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => { //when user logout , there will be no token
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => { //this is used to add friends
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => { //show post
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => { //thi is used to create/update the post 
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

//exporting all the state funtion to use it in other file
export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;
