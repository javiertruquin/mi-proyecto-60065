import { useFetch } from "./hooks/useFetch";
import { usePaginate } from "./hooks/usePaginate";

const Posts = () => {
    const { data: posts } = useFetch("https://jsonplaceholder.org/posts");
    const { arrayCortado, nextPage, prevPage, currentPage } =
        usePaginate(posts,10);

    return (
        <div>
            {arrayCortado.map((post) => {
                return <h2 key={post.id}>{post.slug}</h2>;
            })}
            <button onClick={prevPage}>Anterior</button>
            <h2>{currentPage}</h2>
            <button onClick={nextPage}>Siguiente</button>
        </div>
    );
};

export default Posts;
