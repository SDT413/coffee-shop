import {IProduct} from "@/components/interfaces/Product.interface";

export interface IProductSliderInitialState {
    selectedItemIndex: number;
    items: IProduct[];
    searchQuery: string;
}
