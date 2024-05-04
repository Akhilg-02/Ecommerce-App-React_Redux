import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { singleProduct } from '../../Redux/slices/productSlice';

const ProductCard = ({ id, name, text, img, price, colors }) => {
    const dispatch = useDispatch();
    const { type } = useParams()
  return (
    <Link to={`/filter-product/${type}/` + id}>
    <Card className="w-94" onClick={() => dispatch(singleProduct(id))} style={{backgroundColor:"#555555"}}>
      <CardHeader color="blue" className="relative h-96" >
        <img src={img} alt="img-blur-shadow" className="h-full w-full"/>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2" style={{color:"white"}}>
          {name}
        </Typography>
        <Typography style={{color:"white"}}>{text}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small" style={{color:"black"}}>{price}$</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          {colors?.map((color, index) => {
            return (
              <i
                className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4 "
                key={index}
                style={{ backgroundColor: color }}
              ></i>
            );
          })}
        </Typography>
      </CardFooter>
    </Card>
  </Link>
  )
}

export default ProductCard