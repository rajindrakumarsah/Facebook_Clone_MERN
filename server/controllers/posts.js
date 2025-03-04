import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    //sent here from frontend
    const { userId, description, picturePath } = req.body;

    //finding specific user
    const user = await User.findById(userId);
    //create newpost into database
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    //saving into mongodb
    await newPost.save();
    //save  and grabbing all the post and returning
    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
//for getting feedpost
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//for getting particular user post
export const getUserPosts = async (req, res) => {
  try {
    // particular user post can be find using userId
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    //from backend id
    const { id } = req.params;
    //from frontend id
    const { userId } = req.body;
    //finding particular user post
    const post = await Post.findById(id);
    //finding is user liked 
    const isLiked = post.likes.get(userId);

    if (isLiked) { //user liked then if we click on like button it will delete 
      post.likes.delete(userId);
    } else { //else get liked
      post.likes.set(userId, true);
    }

    //updating likes
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes }, //list of likes which we modified
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
