import { ProxyOptions, loadEnv } from 'vite';

type ProxyTarget = Record<string, ProxyOptions>;

function loadEnvValue(mode: string) {
    //base url
    const API_BASE_URL = loadEnv(mode, process.cwd()).VITE_BASE_PROXY_URL
    //target url
    const API_TARGET_URL = loadEnv(mode, process.cwd()).VITE_TARGET_PROXY_URL

    return {
        API_BASE_URL,
        API_TARGET_URL
    }
}

export function setupProxy(mode: string): ProxyTarget {

    const { API_BASE_URL, API_TARGET_URL } = loadEnvValue(mode)
    console.log(API_BASE_URL, API_TARGET_URL);


    return {
        //develop proxy
        [API_BASE_URL]: {
            target: API_TARGET_URL,
            changeOrigin: true,
            rewrite: (path) => path.replace(new RegExp(`^${API_BASE_URL}`), '')
        }
    }
}