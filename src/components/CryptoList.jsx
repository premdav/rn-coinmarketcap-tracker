import { Box, FlatList, HStack, Spacer, Text, VStack } from "native-base";

const CryptoList = ({ data }) => (
        <FlatList
            p='5'
            data={data}
            renderItem={({item}) => (
                <Box paddingTop='2' paddingBottom='2'>
                    <HStack space='30%' bg='primary.50' borderRadius='5' p='2'>
                        <VStack>
                            <Text color="primary.900" bold>{item.name}</Text>
                            <Text color="primary.700">{item.symbol}</Text>
                        </VStack>
                        <Spacer />
                        <Text color="primary.900" bold>${parseFloat(item.quote.USD.price).toFixed(2)}</Text>
                    </HStack>
                </Box>
            )}
        />
);

export default CryptoList;