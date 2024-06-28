"use client";
import {IProduct} from "@/components/interfaces/Product.interface";
import {NextPage} from "next";
import {useEffect, useState} from "react";
import ProductDetails from "@/components/product-details/ProductDetails";
import ProductsService from "@/api/Products.service";
import {useActions} from "@/hooks/useActions";
import Home from "@/components/home/Home";
import {useConfig} from "@/hooks/useConfig";
import {useRouter} from "next/navigation";

const ProductPage: NextPage = () => {
    const {setCategory} = useActions();
    useEffect(() => {
        setCategory("tea");
    }, []);
    const config = useConfig();
    const router = useRouter();
    useEffect(() => {
        if (config) {
            if (config.activeDetailLink && config.activeDetailLink !== "") {
                /*console.log("redirecting to from app: " + config.category + '/' + config.activeDetailLink);*/
                router.push("/"+config.category + '/' + config.activeDetailLink);
            }
        }
    }, []);


    return (
        <Home/>
    );
};

export default ProductPage;