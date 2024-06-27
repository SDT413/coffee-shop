import React, {FC} from 'react';
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react";
import {IProductProps} from "@/components/interfaces/Product.interface";
import styles from './ProductBreadCrumbs.module.scss';

const ProductBreadCrumbs:FC<IProductProps>= ({product}) => {
    return (
        <Breadcrumb className={styles.breadcrumb}>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/all"> Home </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink className={styles.defaultlink}>{product.name}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
    );
};

export default ProductBreadCrumbs;