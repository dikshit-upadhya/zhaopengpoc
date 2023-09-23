import { httpClient } from './api';
import axios from 'axios';

const BASE_URL = 'http://locahost:3333/api/';

export default {
  setupInterceptors: () => {
    httpClient.interceptors.request.use(
      async (config) => {

        // YOU CAN ADD CODE TO OPEN A LOADER HERE
        if (
          config.url.startsWith(BASE_URL)
        ) {
          let curToken = localStorage.getItem('refreshToken');
          if (!curToken) {
            window.location.replace('/login');
          }
          let token = '';

          // WHEN SENDING ANY REQUEST, FIRST THE ROUTE FOR REFRESH TOKEN IS CALLED, WHERE WE PASS THE REFRESH TOKEN THAT WE HAVE STORED IN THE LOCALSTORAGE WHEN WE LOGGED IN. THIS refreshToken IS USED TO GET A FRESH NEW accessToken USING THE BELOW AXIOS CALL. THEN WE PASS THIS FRESH accessToken TO THE ACTUAL REQUEST THAT WE ARE MAKING BY USING THE api CONSTRUCTOR AND ITS METHODS.
          try {
            const response = await axios({
              url: `${BASE_URL}refreshToken`,
              method: 'POST',
              data: { refreshToken: curToken },
            });
            token = response.data.accessToken;
          } catch (err) {
            if (err.response.status === 401) {

              // IF THE RESPONSE IS 401 FROM THE refreshToken ROUTE, THEN IT MEANS THAT THE refreshToken ALSO HAS EXPIRED. THEN WE REDIRECT USER TO LOGIN SCREEN TO GET A NEW REFRESH_TOKEN
              window.location.replace('/login');
            }
          }
          config.headers.Authorization = `Bearer ${token}`;
          return config;
        }
        return config;
      },
      function (err) {
        return Promise.reject(err);
      }
    );

    httpClient.interceptors.response.use(
      (response) => {

        // YOU CAN ADD CODE TO CLOSE A LOADER HERE

        return response;
      },
      (error) => {
        
        // YOU CAN ADD CODE TO CLOSE A LOADER HERE

        return Promise.reject(error);
      }
    );
  },
};
