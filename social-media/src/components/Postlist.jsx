import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import Welcomemessage from "./Message";

// Component to display the list of posts
const Postlist = () => {
  // Fetching post data using useLoaderData hook
  const postlist = useLoaderData();

  return (
    <>
      {/* Display welcome message if postlist is empty */}
      {postloader.length === 0 && <Welcomemessage />}
      {/* Map through the postlist and render Post components */}
      {postloader.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

// Loader function to fetch post data from API
export const postloader = async () => {
  try {
    const response = await fetch('https://dummyjson.com/posts/ ');
    if (!response.ok) {
      const text = await response.text();
      console.error('Error fetching posts:', text);
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Fetching posts failed:', error);
    return [];
  }
};


export default Postlist;
