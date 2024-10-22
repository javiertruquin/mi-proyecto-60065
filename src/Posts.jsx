import { useFetch } from "./hooks/useFetch";

const Posts = () => {
    const { data: posts } = useFetch("https://jsonplaceholder.org/posts");
    console.log(posts);
    return <div>Posts</div>;
};

export default Posts;
