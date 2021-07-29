import axios from "axios";
import md5 from "md5";

const publicKey = String(process.env.REACT_APP_PUBLIC_KEY);
const privateKey = String(process.env.REACT_APP_PRIVATE_KEY);
const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey);

export const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});
