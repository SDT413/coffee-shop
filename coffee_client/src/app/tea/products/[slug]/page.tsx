"use client";
import {IProduct} from "@/components/interfaces/Product.interface";
import {NextPage} from "next";
import {useEffect, useState} from "react";
import ProductDetails from "@/components/product-details/ProductDetails";
import ProductsService from "@/api/Products.service";
import {useActions} from "@/hooks/useActions";

interface PageProps {
   params: {
         slug: string
   }
}
const ProductPage: NextPage<PageProps> = ({params}) => {
    const [product, setProduct] = useState<IProduct>();
    const {setActiveDetailLink} = useActions();
    const {setCategory} = useActions();
    useEffect(() => {
        setCategory("tea");
        const getProduct = async () => {
            const response = await ProductsService.getProductBySlug(params.slug);
            const product = response.data as IProduct;
            setProduct(product);
        };
        getProduct().then(r => console.log(r));
        const detailLink = 'products/' + params.slug;
        setActiveDetailLink(detailLink);
    }, [params.slug]);


    return (
        <div>
            {product && <ProductDetails product={product}/>}
        </div>
    );
};

export default ProductPage;