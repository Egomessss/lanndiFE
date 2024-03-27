import { lemonSqueezyApiInstance } from '@/lib/lemonqueezy';
import { useState } from 'react';

export const useCreateCheckout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState(null);
  const [isError, setIsError] = useState('');

  const postCheckout = async (productId: number) => {
    setIsLoading(true);
    setIsError('');

    try {
      if (!productId) {
        throw new Error('productId is required');
      }

      const response = await lemonSqueezyApiInstance.post('/checkouts', {
        data: {
          type: 'checkouts',
          attributes: {
            product_options: {
              redirect_url: 'http://localhost:3000/plans',
            },
            checkout_data: {
              custom: {
                user_id: '1', // Adjust as needed
              },
            },
          },
          relationships: {
            store: {
              data: {
                type: 'stores',
                id: '72622',
              },
            },
            variant: {
              data: {
                type: 'variants',
                id: productId.toString(),
              },
            },
          },
        },
      });

      setCheckoutUrl(response.data.data.attributes.url);
    } catch (error) {
      console.error(error);
      setIsError('An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return { postCheckout, checkoutUrl, isLoading, isError };

};