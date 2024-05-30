import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from 'axios';

class Client {
  private instance: AxiosInstance;
  constructor(baseURL: string, timeout: number = 6000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
    this.instance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => Promise.reject(error),
    );
  }

  public setHeaders(headers: RawAxiosRequestHeaders): void {
    Object.keys(headers).forEach((key) => {
      this.instance.defaults.headers.common[key] = headers[key];
    });
  }

  public async get<T>(
    url: string,
    params?: Record<string, any>,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    const finalConfig = {
      ...config,
      params,
    };
    return this.instance.get<T>(url, finalConfig);
  }

  public async post<T>(
    url: string,
    data: object = {},
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.instance.post<T>(url, data, config);
  }

  public async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.instance.delete<T>(url, config);
  }

  public async put<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.instance.put<T>(url, data, config);
  }

  public async patch<T>(
    url: string,
    data: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.instance.patch<T>(url, data, config);
  }
}

export default Client;
