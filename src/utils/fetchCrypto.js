import axios from "axios";
import { CRYPT_KEY } from '@env';

export const fetchCryptoData = async (setData) => {
    try {
        const res = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': CRYPT_KEY ?? '',
            },
        });

        if (res.status === 200) {
            setData(res.data.data);
        }
    } catch (err) {
        console.log('errr');
        setData({ error: 'something went wrong fetching data' });
    }
};