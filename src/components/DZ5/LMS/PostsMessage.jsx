import React from "react";

const PostsMessage = ({ posts }) => {
  return (
    <div className="space-y-6 p-6">
      {posts.map((item) => (
        <div
          key={item.id}
          className="bg-gray-900 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition"
        >
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="text-gray-300 mt-2">{item.body}</p>
          <div className="flex justify-between mt-4 text-sm text-gray-400">
            <span>Likes: {item.likes || 0}</span>
            <span>Dislikes: {item.dislikes || 0}</span>
            <span>Views: {item.views || 0}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsMessage;
