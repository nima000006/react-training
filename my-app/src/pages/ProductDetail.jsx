import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'; // Import Skeleton from react-loading-skeleton
import './ProductDetail.css'; 

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // Set loading to true when starting the fetch
        fetch(`https://dummyjson.com/product/${id}`)
            .then(res => res.json())
            .then(json => {
                setProduct(json);
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch(error => console.error('Error fetching product details:', error));
    }, [id]);

    if (loading) {
        // Display skeleton loader while loading
        return (
            <div className="product-detail-container">
                <div className="product-detail-card">
                    <Skeleton height={300} width={300} /> {/* Example usage of Skeleton */}
                    <div className="product-detail-info">
                        <h2><Skeleton /></h2>
                        <p><Skeleton count={3} /></p>
                    </div>
                </div>
            </div>
        );
    }

    if (!product) {
        return <div>Error: Product not found</div>; // Display error message if product is not found
    }

    return (
        <div className="product-detail-container">
            <div className="product-detail-card">
                <img src={product.thumbnail} alt={product.title} />
                <div className="product-detail-info">
                    <h2>{product.title}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
