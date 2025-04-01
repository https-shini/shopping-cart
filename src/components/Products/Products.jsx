import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "./Loading";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true);
                const productsData = await fetchProducts();
                setProducts(productsData);
            } catch (err) {
                setError(err.message || "Erro ao carregar produtos");
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    if (loading) return <Loading />;
    if (error) return <div className="error-message">{error}</div>;
    if (!products.length) return <div>Nenhum produto encontrado</div>;

    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;
