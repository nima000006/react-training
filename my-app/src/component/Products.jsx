import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router Dom
import Skeleton from 'react-loading-skeleton'; // Import Skeleton from react-loading-skeleton
import './Products.css';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json.products);
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="product-list">
            {loading ? (
                // Display skeleton loading placeholders while data is being fetched
                Array.from({ length: 5 }).map((_, index) => (
                    <div className="product-card" key={index}>
                        <Skeleton height={200} />
                        <div className="product-details">
                            <h2><Skeleton /></h2>
                            <p><Skeleton count={2} /></p>
                        </div>
                    </div>
                ))
            ) : (
                // Display actual product data when available
                products.map(product => (
                    <div className="product-card" key={product.id}>
                        {/* Link each product image to its details page */}
                        <Link to={`/products/${product.id}`}>
                            <img src={product.thumbnail} alt={product.title} />
                        </Link>
                        <div className="product-details">
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>Price: ${product.price}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Product;
