import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import { Postlist as PostListData } from "../store/Post-list-store";
import Welcomemessage from "./Message";
import { useContext, useEffect, useState } from "react";
import "../router/App.css";
import Loading from "./Loadingspinner";

// Component to display the list of posts
const Postlist = () => {
  // Fetching post data using useLoaderData hook
  const postsFromLoader = useLoaderData();
  const { postList, addInitialposts } = useContext(PostListData);
  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    setfetching(true);
    const fetchPosts = async () => {
      const res = await fetch("https://dummyjson.com/posts");
      const data = await res.json();
      addInitialposts(data.posts);
      setfetching(false);
    };

    fetchPosts();
  }, []);

  return (
    <>
      {fetching && <Loading />}
      {/* Display welcome message if postlist is empty */}
      {!fetching && postList.length === 0 && <Welcomemessage />}
      {/* Map through the postlist and render Post components */}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

// Loader function to fetch post data from API
/*export const postLoader = async () => {
  try {
    const response = await fetch("https://dummyjson.com/posts/ ");
    if (!response.ok) {
      const text = await response.text();
      console.error("Error fetching posts:", text);
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Fetching posts failed:", error);
    return [];
  }*/
export const postLoader = async () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default Postlist;
