import axios from 'axios';
// zapochvame rabota sys syrvyra, testvame s thunder client. Tova testvane mozhe bi e po-dobre da se gleda na videoto. Rezultatyt e array s 10 produkta.
const productionUrl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
    baseURL: productionUrl,
});