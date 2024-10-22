import { useFetch } from "./hooks/useFetch";

const Comments = () => {
    const { data: comments } = useFetch("https://jsonplaceholder.org/comments");
    return <div>Comments</div>;
};

export default Comments;
