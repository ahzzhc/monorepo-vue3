import axios, {
  type InternalAxiosRequestConfig,
  type AxiosResponse
} from 'axios'
const defaultConfig = {
  timeout: 5000,
  baseURL: ''
}
class Http {
  constructor() {
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  private static axiosInstance = axios.create(defaultConfig)

  private httpInterceptorsRequest() {
    Http.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = window.localStorage.getItem('token')
        if (token && config.headers) {
          typeof config.headers.set === 'function' &&
            config.headers.set('x-access-token', token)
        }
        return config
      },
      err => {
        return Promise.reject(err)
      }
    )
  }

  private httpInterceptorsResponse() {
    Http.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      err => {
        return Promise.reject(err)
      }
    )
  }

  // get
  public httpRequestGet<T>(
    url: string,
    params: InternalAxiosRequestConfig
  ): Promise<T> {
    return Http.axiosInstance
      .get(url, { params })
      .then(res => res.data)
      .catch()
  }

  // post
  public httpRequestPost<T>(
    url: string,
    params: InternalAxiosRequestConfig
  ): Promise<T> {
    return Http.axiosInstance
      .post(url, params)
      .then(res => res.data)
      .catch()
  }
}

export const http = new Http()
