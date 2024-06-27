import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useMemo} from "react";

export const useConfig = () => {
    const {
        searchQuery,
        category,
        sortType,
        activeDetailLink
    } = useTypedSelector(state => state.config);
    return useMemo(() => ({ searchQuery, category, sortType, activeDetailLink }), [searchQuery, category, sortType, activeDetailLink]);
}