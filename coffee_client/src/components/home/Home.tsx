import React, {FC} from 'react';
import Layout from "@/components/UI/Layout";
import Catalog from "@/components/UI/catalog/Catalog";
import Title from "@/components/UI/title/Title";
import {useEffect, useState} from "react";
import {IProduct} from "@/components/interfaces/Product.interface";
import ProductsService from "@/api/Products.service";
const Home: FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        const getProducts = async () => {
            const products = await ProductsService.getAllProducts() as IProduct[];
            setProducts(products);
        };
        getProducts().then(r => console.log(r));
    }, []);
    return (
        <div>
            <Layout title="Home"
                    description={"More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more."}>
                <Title>
                    The happiest hour of the year
                </Title>
                <Catalog products={products}/>
            </Layout>
        </div>
    );
};

export default Home;