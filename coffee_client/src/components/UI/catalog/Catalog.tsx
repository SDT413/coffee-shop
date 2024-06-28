import {FC, useState} from 'react';
import ProductsSlider from "@/components/UI/catalog/product_slider/ProductsSlider";
import {IProduct} from "@/components/interfaces/Product.interface";
import Sorting from "@/components/UI/catalog/sorting/Sorting";
import {EnumSort} from "@/components/interfaces/sorting.interface";
import Loader from "@/components/UI/Loader/Loader";
import useGetAllProducts from "@/hooks/Query/useGetAllProducts";
import styles from './Catalog.module.scss';
import {useConfig} from "@/hooks/useConfig";

const Catalog :FC<{products: IProduct[]}> = ({products}) => {
    const [sortType, setSortType] = useState<EnumSort>(EnumSort.NEWEST);
    const config = useConfig();
    const {data, isLoading} = useGetAllProducts({products: products, sort: sortType, category: config.category, search: config.searchQuery});
    return (
        <div className={styles.container}>
          <div className={styles.sorting}>
              <Sorting sortType={sortType} setSortType={setSortType}/>
          </div>
            {isLoading ? <Loader/> :
            <ProductsSlider products={data ? data : []}/>
            }
        </div>
    );
};

export default Catalog;