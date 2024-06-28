import {FC} from 'react';
import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {Button} from "@chakra-ui/button";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {SortingData} from "@/components/data/Sorting.data";
import {ISortingProps} from "@/components/interfaces/sorting.interface";
import styles from './Sorting.module.scss';

const Sorting:FC<ISortingProps> = ({
    sortType,
    setSortType
}) => {
    const chosenType = SortingData.find((item) => item.value === sortType)?.name;
    return (
        <div className={styles.sorting}>
      <Menu>
          <MenuButton as={Button} leftIcon={<ChevronDownIcon/>}>
                {chosenType}
          </MenuButton>
          <MenuList>
                {SortingData.map((item) => (
                    <MenuItem key={item.value} onClick={() => {
                        setSortType(item.value);
                    }}>
                        {item.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
        </div>
    );
};

export default Sorting;