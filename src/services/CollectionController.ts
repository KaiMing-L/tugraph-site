import { HOST } from '@/constant';
import { request } from 'umi';

/** 合集列表
@return 
 POST /api/collection/list */
export async function list(
  body?: API.CollectionListRequest,
  options?: { [key: string]: any },
) {
  return request<API.Result_PageVO_CollectionListVO__>(
    HOST + '/api/collection/list',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
