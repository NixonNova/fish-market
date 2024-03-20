/* eslint-disable import/no-anonymous-default-export */
export default {
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/pre-market',
        },
      ]
    },
  }
