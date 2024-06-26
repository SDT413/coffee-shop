import {IProduct} from "@/components/interfaces/Product.interface";
import {BackendSortingInterface, EnumSort} from "@/components/interfaces/sorting.interface";
import {axiosClassic} from "@/api/api";
import sortTypeConverter from "@/components/utils/SortTypeConverter";

const productURL = '/products';

const ProductsService = {
    async getAllProducts(sort?: EnumSort | undefined, category?: string, search?: string, excludeId?: number, page?: number, limit?: number) {
        let convertedSort: BackendSortingInterface | undefined = undefined;
        if (sort) {
            convertedSort = sortTypeConverter(sort);
        }
        let {data} = await axiosClassic.get<IProduct[]>(productURL, {
            params: {
                sort: convertedSort?.sortType,
                order: convertedSort?.sortOrder,
                category: category,
                search: search ? search : undefined,
                excludeId: excludeId,
                page: page,
                limit: limit
            }
        });
        return data;
    },
    async getProductById(id: number) {
        return axiosClassic.get<IProduct>(productURL + "/" + id);
    },
    async getAllButCurrentProduct(id: number) {
        const {data} = await axiosClassic.get<IProduct[]>(productURL + "/allButCurrent/" + id);
        return data;
    },
     async getProductBySlug(slug: string) {
        return axiosClassic.get<IProduct>(productURL + "/slug/" + slug);
    },
    async createProduct(product: IProduct) {
        return axiosClassic.post(productURL, product);
    },
    async updateProduct(product: IProduct, id: number) {
        return axiosClassic.put(productURL + "/" + id, product);
    },
    async deleteProduct(id: number) {
        return axiosClassic.delete(productURL + "/" + id);

    },
    async AddImageToProduct(id: number, imageURL: string) {
        return axiosClassic.post(productURL + "/" + id + "/images", imageURL);
    },
    async RemoveImageFromProduct(id: number, imageURL: string) {
        return axiosClassic.delete(productURL + "/" + id + "/images", {data: imageURL});
    }
}

export default ProductsService;