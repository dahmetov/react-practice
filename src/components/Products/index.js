import React, {useEffect, useState} from 'react'
import axios from "axios";
import ProductItem from "./Item";

const Products = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/Products`).then((response) => {
            setProducts(response.data)
        })
    }, [])

    return (
        <>
            <div className="row">
                {
                    products.map((product) => {
                        return (
                            <div className="col-md-3">
                                <ProductItem key={product.id} product={product}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products