import {FC} from 'react';
import {Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {Button} from "@chakra-ui/button";
import {ChevronDownIcon} from "@chakra-ui/icons";
import {SortingData} from "@/components/data/Sorting.data";
import {EnumSort, ISortingProps} from "@/components/interfaces/sorting.interface";
import {useActions} from "@/hooks/useActions";

const Sorting:FC<ISortingProps> = ({
    sortType,
    setSortType
}) => {
    const {setSortTypeConfig} = useActions();
    const chosenType = SortingData.find((item) => item.value === sortType)?.name;
    setSortTypeConfig(chosenType as EnumSort);
    return (
      <Menu>
          <MenuButton as={Button} leftIcon={<ChevronDownIcon/>}>
                {chosenType}
          </MenuButton>
          <MenuList>
                {SortingData.map((item) => (
                    <MenuItem key={item.value} onClick={() => {
                        setSortType(item.value);
                        setSortTypeConfig(item.value);
                    }}>
                          {item.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default Sorting;