import React, {FC} from 'react';
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react";
import {IProductProps} from "@/components/interfaces/Product.interface";
import styles from './ProductBreadCrumbs.module.scss';

const ProductBreadCrumbs:FC<IProductProps>= ({product}) => {
    return (
            <Breadcrumb display={'flex'} marginTop={8} justifyContent={'end'}>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/"> Home </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink className={styles.defaultlink}>{product.name}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
    );
};

export default ProductBreadCrumbs;