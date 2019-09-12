import React from 'react';
import Product from '../../components/Product/Product';
import styles from './Products.module.css';

const Products = props => {
    return(
        <div className={styles.products}>
            {props.products.map(product=>{
                return <Product
                        user={props.user}
                        key={product.id}
                        id={product.id}
                        image={product.imageUrl} 
                        title={product.title}
                        price={product.price}
                        category={product.category}    
                        />
            })}
        </div>
    )
}

export default Products;