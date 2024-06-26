"use client";
import {IProduct} from "@/components/interfaces/Product.interface";
import {NextPage} from "next";
import {useEffect, useState} from "react";
import ProductDetails from "@/components/product-details/ProductDetails";
import ProductsService from "@/api/Products.service";
import {useActions} from "@/hooks/useActions";
import Home from "@/components/home/Home";

const ProductPage: NextPage = () => {
    const {setCategory} = useActions();
    useEffect(() => {
        setCategory("all");
    }, []);


    return (
        <Home/>
    );
};

export default ProductPage;