import {FC, useState} from 'react';
import styles from './Search.module.scss';
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import {useActions} from "@/hooks/useActions";
import {useConfig} from "@/hooks/useConfig";

const Search:FC = () => {
    const [search, setSearch] = useState<string>('')
    const {setSearchQuery} = useActions();
    const config = useConfig();
    return (
        <div className={styles.search}>
            <InputGroup size = 'xs'>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color="gray.500" top={1} position='relative'/>}
                />
            <Input className={styles.input}
                variant="flushed"
                   size = 'base'
                   type = 'search'
                   placeholder = 'Search'
                   value = {search}
                   onChange = {(e) => {
                          setSearch(e.target.value);
                          setSearchQuery(e.target.value);
                          console.log(config.searchQuery);
                   } }
                    _focus={
                        {
                            borderColor: 'green.400'
                        }
                    }
            />
            </InputGroup>
        </div>
    );
};

export default Search;