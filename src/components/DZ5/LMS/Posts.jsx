import { useEffect, useState } from "react";
import { getPostsById } from "./usersbyId";
import { useParams } from "react-router-dom";
import PostsMessage from "./PostsMessage";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const { userId } = useParams();
  console.log(userId);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getPostsById(userId);
        setPosts(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [userId]);
  return (
    <div className="text-white">
      {posts.length > 0 ? (
        <PostsMessage posts={posts} />
      ) : (
        <p className="text-white text-2xl my-10 text-center">
          {" "}
          Posts not Found
        </p>
      )}
    </div>
  );
};

export default Posts;
