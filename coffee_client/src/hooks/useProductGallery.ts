import {useEffect, useState} from "react";
import {IProduct} from "@/components/interfaces/Product.interface";
import ProductsService from "@/api/Products.service";
import {EnumSort} from "@/components/interfaces/sorting.interface";

export const useProductGallery = (productId: number, category: string, sort: EnumSort) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        const getProducts = async () => {
            const products = await ProductsService.getAllProducts(sort, category, undefined, productId, undefined, undefined);
            setProducts(products);
            console.log(products);
        };
        console.log('useProductGallery');
        console.log(productId);
        console.log(category);
        console.log(sort);
        getProducts();
    }, [productId, category]);
    const nextProduct = products[products.findIndex(product => product.id === productId) + 1]?.slug;
    const prevProduct = products[products.findIndex(product => product.id === productId) - 1]?.slug;
    return {
        nextProduct,
        prevProduct
    }
}