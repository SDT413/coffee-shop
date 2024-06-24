import {FC, useEffect, useState} from 'react';
import Layout from "@/components/UI/Layout";
import Title from "@/components/UI/title/Title";
import {IProduct, IProductProps} from "@/components/interfaces/Product.interface";
import ProductBreadCrumbs from "@/components/UI/product/product-breadcrumbs/ProductBreadCrumbs";
import ProductGallery from "@/components/UI/product/product-gallary/ProductGallery";
import ProductCard from "@/components/UI/product/product-card/ProductCard";
import Catalog from "@/components/UI/catalog/Catalog";
import ProductsService from "@/api/Products.service";
import {useQuery} from "@tanstack/react-query";
const ProductDetails: FC<IProductProps> = ({product}) => {
    const {data} = useQuery(
        ['products', product.id],
        () => ProductsService.getAllButCurrentProduct(product.id),
        {initialData: []}
    );
    return (
        <div>
            <Layout title={product.name}
                    description={product.description}>
                <Title className={'text-center'}>
                  Product Details
                </Title>
                <ProductBreadCrumbs product={product}/>
                <ProductGallery product={product}/>
                <ProductCard product={product}/>
                <Catalog products={data}/>
            </Layout>
        </div>
    );
};

export default ProductDetails;