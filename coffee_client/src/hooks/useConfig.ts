import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useMemo} from "react";

export const useConfig = () => {
    const {
        searchQuery,
        category,
        sortType
    } = useTypedSelector(state => state.config);
    return useMemo(() => ({ searchQuery, category, sortType }), [searchQuery, category, sortType]);
}