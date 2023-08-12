import { promotionApi } from '@/apis/handlers/promotion';
import { GetPromotionsResponse } from '@/apis/types/promotion';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const usePromotions = (
  options?: UseQueryOptions<GetPromotionsResponse, AxiosError, GetPromotionsResponse, ['promotions']>
) =>
  useQuery({
    ...options,
    queryKey: ['promotions'],
    queryFn: () => promotionApi.getPromotions(),
  });

export default usePromotions;
