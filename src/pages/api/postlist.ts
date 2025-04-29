import api from './axios';

interface PostListResponse {
  postId: number;
  title: string;
  username: string;
  createdAt: string;
  updatedAt: string;
  count: number;
}

interface SearchResponse extends PostListResponse {}

/**
 * 게시글 목록 조회
 */
const postlist = async (page: number): Promise<PostListResponse[]> => {
  const res = await api.get(`/post/list?page=${page}`);
  return res.data;
};

/**
 * 게시글 검색
 */
const search = async (
  keyword: string,
  page: number = 0,
  size: number = 8,
  sort: string = 'createdAt',
  direction: string = 'DESC'
): Promise<SearchResponse[]> => {
  const res = await api.get(`/search`, {
    params: {
      keyword,
      page,
      size,
      sort,
      direction,
    },
  });
  return res.data;
};

export default {
  postlist,
  search,
};
