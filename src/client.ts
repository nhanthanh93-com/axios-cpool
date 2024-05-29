import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class Client {
  private instance: AxiosInstance;

  constructor(baseURL: string, timeout: number = 6000) {
    this.instance = axios.create({
      baseURL,
			timeout,
    });
    this.instance.interceptors.response.use(function (response) {
			return response
		}, function (error: AxiosError) {
			return Promise.reject(error);
		})
  }

	public async get<T>(url: string, params?: Record<string, any>, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const finalConfig = {
      ...config,
      params,
    };
    return this.instance.get<T>(url, finalConfig);
  }

  public async post<T>(url: string, data: object = {}, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.post<T>(url, data, config);
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.delete<T>(url, config);
  }

  public async update<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.put<T>(url, data, config); // assuming PUT for update
  }
}

export default Client;
