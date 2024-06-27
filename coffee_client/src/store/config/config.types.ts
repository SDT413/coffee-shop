import {EnumSort} from "@/components/interfaces/sorting.interface";

export interface IConfig {
    searchQuery: string;
    category: string;
    sortType: EnumSort;
    activeDetailLink: string;
}