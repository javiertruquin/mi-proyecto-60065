import { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { Box, Skeleton } from "@mui/material";
import { db } from "../../../firebaseConfig.js";
import { collection, getDocs, query, where } from "firebase/firestore";
// import { addDoc } from "firebase/firestore";
// import { products } from "../../../productos.js";

export const ItemListContainer = () => {
    const { name } = useParams();

    const [items, setItems] = useState([]);
    useEffect(() => {
        const productsCollection = collection(db, "products");
        let docsRef = productsCollection;
        if (name) {
            docsRef = query(productsCollection, where("categoria", "==", name));
        }

        getDocs(docsRef).then((res) => {
            let arrayEntendible = res.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });
            setItems(arrayEntendible);
        });
    }, [name]);

    // const funcionParaAgregar = () => {
    //     // products.addDoc();
    //     const productsCollection = collection(db, "products");
    //     // addDoc(productsCollection, {});
    //     products.forEach((product) => {
    //         addDoc(productsCollection, product);
    //     });
    // };
    return (
        <Box style={{ paddingTop: "20px" }}>
            {items.length === 0 && (
                <>
                    <Skeleton variant="rectangular" width={200} height={100} />
                    <Skeleton variant="text" width={200} height={100} />
                    <Skeleton variant="text" width={200} height={100} />
                </>
            )}

            <ItemList items={items} />
            {/* <button onClick={funcionParaAgregar}>cargar los productos</button> */}
        </Box>
    );
};
