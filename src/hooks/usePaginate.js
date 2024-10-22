import { useState } from "react";

export const usePaginate = (array, cant) => {
    //siempre cortar de 10  en 10 por ahora

    const [currentPage, setCurrentPage] = useState(1);
    let totalPages = Math.ceil(array.length / cant);

    // const [arrayCortado, setarrayCortado] = useState(initialState)
    const arrayCortado = array.slice(
        (currentPage - 1) * cant,
        cant * currentPage
    );

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return { arrayCortado, nextPage, prevPage, currentPage };
};
