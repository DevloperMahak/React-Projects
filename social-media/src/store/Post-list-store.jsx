import {
  createContext,
  useCallback,
  useReducer,
  useState,
  useEffect,
} from "react";

export const Postlist = createContext({
  postList: [],
  addpost: () => {},
  addInitialposts: () => {},
  deletepost: () => {},
});
const postlistReducer = (currpostlist, action) => {
  let newpostlist = currpostlist;
  if (action.type === "DELETE_POST") {
    newpostlist = currpostlist.filter(
      (post) => post.id !== action.payload.postid
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newpostlist = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newpostlist = [action.payload.post, ...currpostlist];
  }
  return newpostlist;
};

const Postlistprovider = ({ children }) => {
  const [postList, dispatchpostlist] = useReducer(postlistReducer, []);

  const addpost = (post) => {
    dispatchpostlist({
      type: "ADD_POST",
      payload: { post },
    });
  };

  const addInitialposts = (posts) => {
    dispatchpostlist({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletepost = useCallback(
    (postid) => {
      dispatchpostlist({
        type: "DELETE_POST",
        payload: { postid },
      });
    },
    [dispatchpostlist]
  );

  return (
    <Postlist.Provider
      value={{ postList, addpost, deletepost, addInitialposts }}
    >
      {children}
    </Postlist.Provider>
  );
};
export default Postlistprovider;
