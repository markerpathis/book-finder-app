import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface Filter {
  id: number;
  name: string;
  search: string;
}

interface Props {
  onSelectFilter: (filter: Filter) => void;
  selectedFilter: Filter | null;
}

const DropdownFilter = ({ onSelectFilter, selectedFilter }: Props) => {
  const filterItems = [
    { id: 1, name: "Relevance", search: "relevance" },
    { id: 2, name: "Newest", search: "newest" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedFilter?.name ? selectedFilter.name : "Filter"}
      </MenuButton>
      <MenuList>
        {filterItems.map((filterItem) => (
          <MenuItem
            key={filterItem.id}
            onClick={() => onSelectFilter(filterItem)}
          >
            {filterItem.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DropdownFilter;
