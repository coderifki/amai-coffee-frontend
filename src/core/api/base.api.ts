import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'
import { CookieJar } from 'tough-cookie'
import { wrapper } from 'axios-cookiejar-support'
import { deleteCookie } from 'cookies-next'

interface IApiClientConfig extends InternalAxiosRequestConfig {
  accessToken?: string
}

class ApiClient {
  private axiosInstance: AxiosInstance

  constructor() {
    // console.log('process.env.NEXT_PUBLIC_API_URL', process.env.NEXT_PUBLIC_API_URL)
    const jar = new CookieJar()
    this.axiosInstance = wrapper(
      axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        jar,
        withCredentials: true,
      })
    )
    this.axiosInstance.interceptors.request.use(this.interceptRequest)
    this.axiosInstance.interceptors.response.use(
      this.interceptResponse,
      this.interceptResponseError
    )
  }

  public setAuthHeader = (accessToken: string) => {
    this.axiosInstance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${accessToken}`
  }

  public async get<T = object>(
    url: string,
    config?: Partial<IApiClientConfig>
  ) {
    return this.axiosInstance.get<T>(url, config)
  }

  public async post<D = object, T = object>(
    url: string,
    data?: D,
    config?: Partial<IApiClientConfig>
  ) {
    return this.axiosInstance.post<T, AxiosResponse<T>, D>(url, data, config)
  }

  public async put<T = object>(
    url: string,
    data?: object,
    config?: IApiClientConfig
  ) {
    return this.axiosInstance.put<T>(url, data, config)
  }

  public async patch<T = object>(
    url: string,
    data?: object,
    config?: IApiClientConfig
  ) {
    return this.axiosInstance.patch<T>(url, data, config)
  }

  public async delete<T = object>(url: string, config?: IApiClientConfig) {
    return this.axiosInstance.delete<T>(url, config)
  }

  private interceptResponseError = (error: AxiosError) => {
    console.trace('error', axios.isAxiosError(error))
    if (axios.isAxiosError(error)) {
      // const getUserCookie = getCookie('user')
      if (error.response?.status === 401) {
        deleteCookie('user')
      }
    }
    return Promise.reject(error)
  }

  private interceptResponse = (response: AxiosResponse) => {
    return response
    // try {
    //   // if (response.data && response.data.accessToken) {
    //   //     this.setAuthHeader(response.data.accessToken)
    //   // }
    //   return response
    // } catch (e: unknown) {
    //   if (axios.isAxiosError(e)) {
    //     console.trace('e.response', e.response)
    //   }
    //   console.trace('e', e)
    //   // if (Axios.isAxiosError(e)){
    //   // if(e.response === 401) {
    //   //   console.trace('e.response', e.response)
    //   // }
    // }
    // const getUserCookie = getCookie('user')
    // console.trace('getUserCookie', getUserCookie)
    // if (e.status === 401 && getUserCookie) {
    //   //   deleteCookie('user')
    //   // }
    //   // return response
    // }
  }

  private interceptRequest = (config: IApiClientConfig) => {
    if (config.accessToken) {
      config.headers.Authorization = `Bearer ${config.accessToken}`
    }

    return config
  }
}

export const apiClient = new ApiClient()
