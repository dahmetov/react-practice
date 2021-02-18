import React, {useEffect, useState} from 'react'

const ProductItem = (props) => {

    return (
        <>
            <div className="card">
                <img src={props.product.image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.product.title}</h5>
                    <p className="card-text">{props.product.description}</p>
                    <a href={`/product/${props.product.id}`} className="btn btn-primary">View more</a>
                </div>
            </div>
        </>
    )
}

export default ProductItem