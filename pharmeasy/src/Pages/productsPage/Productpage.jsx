import { Grid, Box, Center, Stack, Select, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProduct, getProductUrl } from "../../Redux/Redux-Product/action";
import { store } from "../../Redux/store";
import Filter from "./filterComp/Filter";
import ProductCard from "./ProductCard";

export default function ProductPage() {
  const { data, loading } = useSelector((store) => {
    return {
      data: store.reducer.dataOnfetch,
      loading: store.reducer.isLoading,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const [option,setOption]=useState('')

  const handelSort=(e)=>{
setOption(e.target.value)
  }
  const [searchParams,setSearchParams]=useSearchParams()
  useEffect(()=>{
const param={
  _sort:option
};

setSearchParams(param)

getProductUrl(param)
  },[option])

  return (
    <>
      <Center>
        <Box display={"flex"} gap="100px">
          <Box mt="30px" w="300px">
            {" "}
            <Filter />
          </Box>
          <Box>
            <Box
              h="100px"
              display={"flex"}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                {" "}
                <Text fontSize={"2xl"} color="grey">
                  Health Care Product
                </Text>
              </Box>

              <Box
                w="300px"
                display="flex"
                gap={10}
                justifyContent="center"
                alignItems={"center"}
              >
                <Text fontSize={"xl"} color="grey">
                  SortBy:
                </Text>
                <Select  onChange={handelSort} >
                  <option  >Popularity</option>
                  <option value={'mrpDecimal'} >Price Low to high</option>
                  <option value={'desc'} >Price High to Low</option>
                  <option value={'discountPercent'} >Discount %</option>
                </Select>
              </Box>
            </Box>
            <Grid templateColumns="repeat(3,1fr)" gridGap={10}>
              {data &&
                data.map((elm) => {
                  return (
                    <div key={elm.productId}>
                      <ProductCard key={elm.id} item={elm} />
                    </div>
                  );
                })}
            </Grid>
          </Box>
        </Box>
      </Center>
      {/* <Skeleton/> */}
    </>
  );
}
