import {IProduct} from "@/components/interfaces/Product.interface";
import {BackendSortingInterface, EnumSort} from "@/components/interfaces/sorting.interface";
import {axiosClassic} from "@/api/api";
import sortTypeConverter from "@/components/utils/SortTypeConverter";

const productURL = '/products';

const ProductsService = {
    async getAllProducts(sort?: EnumSort, category?: string, search?: string) {
        console.log("Fetching products");
        console.log("sort: ", sort);
        console.log("category: ", category);
        console.log("search: ", search);
        if (category && sort && search) {
            const convertedSort: BackendSortingInterface = sortTypeConverter(sort);
            const {data} = await axiosClassic.get<IProduct[]>(productURL + "?category=" + category + "&sort=" + convertedSort.sortType + "&order=" + convertedSort.sortOrder + "&search=" + search);
            return data;
        }
        else if (category && sort) {
            const convertedSort: BackendSortingInterface = sortTypeConverter(sort);
            const {data} = await axiosClassic.get<IProduct[]>(productURL + "?category=" + category + "&sort=" + convertedSort.sortType + "&order=" + convertedSort.sortOrder);
            return data;
        }
        else if (category && search) {
            const {data} = await axiosClassic.get<IProduct[]>(productURL + "?category=" + category + "&search=" + search);
            return data;
        }
        else if (sort && search) {
            const convertedSort: BackendSortingInterface = sortTypeConverter(sort);
            const {data} = await axiosClassic.get<IProduct[]>(productURL + "?sort=" + convertedSort.sortType + "&order=" + convertedSort.sortOrder + "&search=" + search);
            return data;
        }
        else if (sort) {
                const convertedSort: BackendSortingInterface = sortTypeConverter(sort);
                const {data} = await axiosClassic.get<IProduct[]>(productURL + "?sort=" + convertedSort.sortType + "&order=" + convertedSort.sortOrder);
                return data;
            }
            else if (category) {
                const {data} = await axiosClassic.get<IProduct[]>(productURL + "?category=" + category);
                return data;
            }
            else if (search) {
                const {data} = await axiosClassic.get<IProduct[]>(productURL + "?search=" + search);
                return data;
            }
            else {
                const {data} = await axiosClassic.get<IProduct[]>(productURL);
                return data;
            }
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
    async SearchProducts(search: string) {
      const {data} = await axiosClassic.get<IProduct[]>(productURL + "/search/" + search);
        return data;
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