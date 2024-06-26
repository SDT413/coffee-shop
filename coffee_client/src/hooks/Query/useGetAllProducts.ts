import {useQuery} from "@tanstack/react-query";
import {PRODUCTS} from "@/components/consts/TanstackConsts";
import ProductsService from "@/api/Products.service";
import {EnumSort} from "@/components/interfaces/sorting.interface";
import {IProduct} from "@/components/interfaces/Product.interface";

const UseGetAllProducts = (sort: EnumSort, category: string, search: string, products: IProduct[]) => {
    return useQuery([PRODUCTS, sort, category, search], () => ProductsService.getAllProducts(sort, category, search)
        , {
            initialData: products,
            onError: (err) => {
                console.log("Something went wrong in UseAdmins.tsx");
            }
        }
    );
};

export default UseGetAllProducts;