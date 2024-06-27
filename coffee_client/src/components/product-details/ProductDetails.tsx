import {FC, useEffect, useState} from 'react';
import Layout from "@/components/UI/Layout";
import Title from "@/components/UI/title/Title";
import {IProductProps} from "@/components/interfaces/Product.interface";
import ProductBreadCrumbs from "@/components/UI/product/product-breadcrumbs/ProductBreadCrumbs";
import ProductCard from "@/components/UI/product/product-card/ProductCard";
import Catalog from "@/components/UI/catalog/Catalog";
import useGetAllProducts from "@/hooks/Query/useGetAllProducts";
const ProductDetails: FC<IProductProps> = ({product}) => {
    const {data} = useGetAllProducts({excludeId: product.id, category: product.category});
    return (
        <div>
            <Layout title={product.name}
                    description={product.description}>
                <Title className={'text-center'}>
                  Product Details
                </Title>
                <ProductBreadCrumbs product={product}/>
                <ProductCard product={product}/>
                <Catalog products={data ? data : []}/>
            </Layout>
        </div>
    );
};

export default ProductDetails;