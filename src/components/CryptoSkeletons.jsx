import { Center, Skeleton, VStack } from "native-base";


const CryptoSkeletons = () => (
    <Center w='100%'>
        <VStack w='90%' p='5'>
            {
                [...Array(10)].map(() => <Skeleton p='2' h='10' />)
            }
            <Skeleton />
        </VStack>
    </Center>
);

export default CryptoSkeletons;