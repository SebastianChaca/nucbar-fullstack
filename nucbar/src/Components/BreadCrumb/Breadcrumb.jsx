import { Flex, Text, Box } from '@chakra-ui/layout';
import { IoIosArrowForward } from 'react-icons/io';

const Breadcrumb = ({ items }) => {
  const lastItem = items[items.length - 1];
  console.log(lastItem);
  const BreadCrumbItem = ({ item }) => {
    return (
      <Flex alignItems="center" ml={lastItem !== item && '10px'}>
        <Text ml="2px" color="nucba.breadCrumbs" fontWeight="400">
          {item}
        </Text>
        {lastItem !== item && (
          <Box color="nucba.breadCrumbs">
            <IoIosArrowForward fontSize="15px" />
          </Box>
        )}
      </Flex>
    );
  };
  return (
    <Flex w="40%">
      {items.map((i, index) => {
        return <BreadCrumbItem item={i} index={index} />;
      })}
    </Flex>
  );
};

export default Breadcrumb;
