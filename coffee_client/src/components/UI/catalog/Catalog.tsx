import {FC, useState} from 'react';
import ProductsSlider from "@/components/UI/catalog/product_slider/ProductsSlider";
import {IProduct} from "@/components/interfaces/Product.interface";
import Sorting from "@/components/UI/catalog/sorting/Sorting";
import {EnumSort} from "@/components/interfaces/sorting.interface";
import {useQuery} from "@tanstack/react-query";
import ProductsService from "@/api/Products.service";
import Loader from "@/components/UI/Loader/Loader";

const Catalog :FC<{products: IProduct[]}> = ({products}) => {
    const [sortType, setSortType] = useState<EnumSort>(EnumSort.NEWEST);
    const {data, isLoading} = useQuery(
        ['products', sortType],
        () => ProductsService.getAllProducts(sortType),
        {initialData: products}
    );
    return (
        <div className='relative'>
          <div className={'text-right mt-10'}>
              <Sorting sortType={sortType} setSortType={setSortType}/>
          </div>
            {isLoading ? <Loader/> :
            <ProductsSlider products={data}/>
            }
        </div>
    );
};

export default Catalog;