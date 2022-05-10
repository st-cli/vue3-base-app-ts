import axios from 'axios'
import type {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    AxiosInstance
} from 'axios'
import { message } from 'ant-design-vue'

const baseUrl: string = import.meta.env.VITE_AXIOS_BASE_URL

const service: AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000
})

service.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        return config
    },
    async (error: AxiosError) => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    async (response: AxiosResponse) => {
        if (response.status === 200) {
            if (response.data.code != '0' && response.data.message) {
                message.warning(response.data.message)
            }
            return Promise.resolve(response.data)
        } else {
            return Promise.reject(response)
        }
    },
    async (error: AxiosError) => {
        const { response } = error
        if (response) {
            return Promise.reject(response)
        } else {
            message.error('网络异常')
        }
    }
)

export default service
