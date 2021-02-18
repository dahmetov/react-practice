import React, {useEffect, useState} from 'react'
import axios from "axios";
import './index.css'

const Product = (props) => {

    const [product, setProduct] = useState([])

    console.log(props)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/Products/${props.match.params.id}`).then((response) => {
            setProduct(response.data)
            console.log(response.data)
        })
    }, [])

    return (
        <>

        </>
    )
}

export default Product