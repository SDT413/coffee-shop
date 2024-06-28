import {FC, useState} from 'react';
import styles from './Search.module.scss';
import {Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import {useActions} from "@/hooks/useActions";
import {useConfig} from "@/hooks/useConfig";

const Search:FC = () => {
    const {setSearchQuery} = useActions();
    const config = useConfig();
    return (
        <div className={styles.search}>

            <InputGroup size='xs'>
                <InputLeftElement
                    pointerEvents='none'
                    children={
                        <SearchIcon color="gray.500" className={styles.icon}/>
                    }
                    className={styles.icon_container}
                />
            <Input className={styles.input}
                   variant="flushed"
                   size='base'
                   type='search'
                   placeholder='Search'
                   value={config.searchQuery}
                   onChange={(e) => {
                       setSearchQuery(e.target.value);
                   }}
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