import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button } from "@material-tailwind/react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
  } from "@material-tailwind/react";
import ProductCard from './ProductCard';
import Error from '../Error/Error';
import {
  filterProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from "../../Redux/slices/productSlice"


const FilterProduct = () => {
    const products = useSelector((state)=>state.products.filteredProducts);
    const error = useSelector((state)=>state.products.error);
   // console.log("FilProducts",products);
    const {type} = useParams();
    //console.log('params',type);
    const genderButtons = ["male", "female"];
    const colorButtons = [
      "red",
      "green",
      "purple",
      "yellow",
      "orange",
      "blue",
      "black",
      "brown",
    ];
    const sizeButtons = ["S", "M", "L", "XL"];
    const dispatch = useDispatch();
  return (
    <div style={{padding:"3em"}}>
      <div className="pt-16">
        <div className="pl-14">
          <h1 className="text-yellow-600 text-4xl font-inter font-bold tracking-normal leading-none">
            {type}
          </h1>
          <div className="flex items-center justify-between py-8 ">
            <div className="flex items-center">
              {genderButtons.map((item, index) => {
                return (
                  <div key={index}>
                    <Button
                      color="gray"
                      size="lg"
                      variant="outlined"
                      ripple={true}
                      className="hover:bg-orange-400 duration-300 ease-in-out mr-4"
                     onClick={() => dispatch(filterGender(item))}
                    >
                      {item}
                    </Button>
                  </div>
                );
              })}
              <Button
                color="gray"
                size="lg"
                variant="outlined"
                ripple={true}
                className="text-black hover:bg-orange-400 duration-300 ease-in-out mr-4"
               onClick={() => dispatch(sortByPrice())}
              >
                High Price
              </Button>
              <Menu>
                <MenuHandler>
                  <Button
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black hover:bg-orange-400 duration-300 ease-in-out mr-4"
                  >
                    Select a color
                  </Button>
                </MenuHandler>
                <MenuList>
                  {colorButtons.map((item, index) => {
                    return (
                      <MenuItem
                        style={{ color: item }}
                        key={index}
                        onClick={() => dispatch(filterByColor(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              <Menu>
                <MenuHandler>
                  <Button
                    disabled={type === "Bags" || type === "Shoes"}
                    color="gray"
                    size="lg"
                    variant="outlined"
                    ripple={true}
                    className="text-black hover:bg-orange-400 duration-300 ease-in-out mr-4"
                  >
                    Select a size
                  </Button>
                </MenuHandler>
                <MenuList>
                  {sizeButtons.map((item, index) => {
                    return (
                      <MenuItem
                        key={index}
                        onClick={() => dispatch(filterBySize(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </div>
            <div className="pr-14">
              <Button
                 color="gray"
                 size="lg"
                 variant="outlined"
                 ripple={true}
                 className="text-black hover:bg-red-600 duration-300 ease-in-out mr-4"
                 onClick={() => dispatch(filterProducts(type))}
              >
                Clear Filter
              </Button>
            </div>
          </div>
        </div>
        {error ? (
         <Error/>
        ) 
        :
         (
          <div className="grid grid-cols-4 justify-items-center py-8 gap-12 gap-x-6">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <div key={index} className="">
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      colors={product.color}
                    ></ProductCard>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  )
}

export default FilterProduct