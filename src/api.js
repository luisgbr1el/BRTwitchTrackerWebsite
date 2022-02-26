import axios from 'axios'

const api = axios.create({
 baseURL: "https://api.twitch.tv/helix/streams?first=10&language=pt",
});

api.interceptors.request.use(
 (config) => {
   config.headers.get['Authorization'] = "Bearer cs824wpnmuo2wktgr2p9jwg5danq2u"
   config.headers.get["Client-Id"] = "gggp64kkmus0x3ao4w26tw275yqn88";

   return config;
 },
 (error) => {
   return Promise.reject(error);
 }
);

export default api;