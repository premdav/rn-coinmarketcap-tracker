import { View, Text, Center, Button, Heading } from "native-base";
import { useEffect, useState } from "react";
import CryptoList from "../components/CryptoList";
import CryptoSkeletons from "../components/CryptoSkeletons";
import { fetchCryptoData } from "../utils/fetchCrypto";

const CryptoHome = () => {
    console.log('hello');
    const [cryptoData, setCryptoData] = useState(null);

    useEffect(() => {
        !cryptoData && fetchCryptoData(setCryptoData);
    }, [cryptoData]);

    return (
        <View h='100%' bg='primary.900'>
            <Center p='2'>
                <Heading underline color='amber.600'>Latest prices</Heading>
            </Center>
            {
                !cryptoData && <CryptoSkeletons />
            }
            {
                cryptoData?.error ? (
                    <Center h="100%" w="100%">
                        <Center bg="error.400" h="70%" w="100%">
                            <Text color="white">{cryptoData.error}</Text>
                        </Center>
                    </Center>
                    
                ) : (
                    <CryptoList
                        data={cryptoData}
                    />
                )
            }
            <Button colorScheme='amber' onPress={() => setCryptoData(null)}>refetch data</Button>
        </View>
    );
};

export default CryptoHome;
