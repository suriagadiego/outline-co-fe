import axios from 'axios';
import { api, setAuthInterceptor } from '../../interceptors/request';

export const callExternalApi = async (options: any) => {
    const accessToken = localStorage.getItem("access") || ''
    setAuthInterceptor(accessToken);
    try {
      const response = await api(options.config); // Use the 'api' instance here
      const { data } = response;
      return {
        data,
        error: null,
      };
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const axiosError = error;
  
        const { response } = axiosError;
        let errorCode = ""
        let message = "http request failed";
  
        if (axiosError.message) {
          message = axiosError.message;
        }
  
        if (response && response.data && response.data.message) {
          message = response.data.message;
        }
        if (response && response.data && response.data.error_code){
          errorCode = response.data.error_code
        }
        
  
        return {
          data: null,
          error: {
            message,
            status: response?.status,
          },
        };
      }
  
      return {
        data: null,
        error: {
          message: error.message,
        },
      };
    }
};
  