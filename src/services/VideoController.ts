import { HOST } from '@/constant';
import { request } from 'umi';

/** 合集列表
@return 
 POST /api/video/list */
export async function list(
  body?: API.VideoListRequest,
  options?: { [key: string]: any },
) {
  return request<API.Result_PageVO_VideoListVO__>(HOST + '/api/video/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    retry: 1,
    data: body,
    ...(options || {}),
  });
}
