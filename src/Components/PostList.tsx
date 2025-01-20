// import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from "axios";
import { postProps } from "../types/types";
import { useQuery } from "@tanstack/react-query";

const PostList = () => {
  type postPropsAndNumber = postProps & {
    id: number;
  };
  //   const [posts, setPosts] = useState<postPropsAndNumber[]>([]);
  //   const [loading, setIsloading] = useState(true);

  const getPostData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPostData,
  });

  //   useEffect(() => {
  //     const getPostData = async () => {
  //       try {
  //         const res = await axios.get(
  //           "https://jsonplaceholder.typicode.com/posts"
  //         );
  //         setPosts(res.data);
  //       } catch (e) {
  //         console.log("error getting" + e);
  //       } finally {
  //         setIsloading(false);
  //       }
  //     };
  //     getPostData();
  //   }, []);

  return (
    <div className="flex max-w-full justify-between mx-20 flex-wrap">
      {/* <PostCard title="post1" body="description of post1" /> */}
      {isLoading && <h1>Loading...</h1>}
      {data?.map((post: postPropsAndNumber) => {
        return <PostCard key={post.id} title={post.title} body={post.body} />;
      })}
    </div>
  );
};

export default PostList;
