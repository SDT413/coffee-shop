import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useMemo} from "react";

export const useConfig = () => {
    const {
        searchQuery,
        category
    } = useTypedSelector(state => state.config);
    return useMemo(() => ({ searchQuery, category }), [searchQuery, category]);
}