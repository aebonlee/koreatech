import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;

const getSupabase = () => {
  if (!supabase && supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        autoRefreshToken: true,
        persistSession: true,
      }
    });
  }
  return supabase;
};

const POSTS_PER_PAGE = 10;

/**
 * 게시글 목록 조회
 */
export const getPosts = async (page = 1, category = null) => {
  const client = getSupabase();
  if (!client) return { posts: [], total: 0 };

  let query = client
    .from('posts')
    .select('*', { count: 'exact' })
    .order('created_at', { ascending: false });

  if (category) {
    query = query.eq('category', category);
  }

  const from = (page - 1) * POSTS_PER_PAGE;
  const to = from + POSTS_PER_PAGE - 1;
  query = query.range(from, to);

  const { data, error, count } = await query;

  if (error) {
    console.error('getPosts error:', error);
    return { posts: [], total: 0 };
  }

  return { posts: data || [], total: count || 0 };
};

/**
 * 게시글 상세 조회
 */
export const getPostById = async (id) => {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('getPostById error:', error);
    return null;
  }

  return data;
};

/**
 * 게시글 작성
 */
export const createPost = async (postData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('posts')
    .insert(postData)
    .select()
    .single();

  if (error) throw error;
  return data;
};

/**
 * 게시글 삭제
 */
export const deletePost = async (id) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('posts')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

/**
 * 조회수 증가
 */
export const incrementViews = async (id) => {
  const client = getSupabase();
  if (!client) return;

  await client.rpc('increment_views', { post_id: id }).catch(() => {
    // RPC 미존재 시 직접 업데이트
    client
      .from('posts')
      .update({ views: client.sql`views + 1` })
      .eq('id', id)
      .then(() => {})
      .catch(() => {});
  });
};

/**
 * 댓글 목록 조회
 */
export const getComments = async (postId) => {
  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from('comments')
    .select('*')
    .eq('post_id', postId)
    .order('created_at', { ascending: true });

  if (error) {
    console.error('getComments error:', error);
    return [];
  }

  return data || [];
};

/**
 * 댓글 작성
 */
export const createComment = async (commentData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('comments')
    .insert(commentData)
    .select()
    .single();

  if (error) throw error;
  return data;
};

/**
 * 댓글 삭제
 */
export const deleteComment = async (id) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('comments')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

/**
 * 게시글 검색
 */
export const searchPosts = async (query) => {
  const client = getSupabase();
  if (!client || !query.trim()) return [];

  const pattern = `%${query.trim()}%`;

  const { data, error } = await client
    .from('posts')
    .select('id, title, author_name, created_at')
    .or(`title.ilike.${pattern},content.ilike.${pattern}`)
    .order('created_at', { ascending: false })
    .limit(5);

  if (error) {
    console.error('searchPosts error:', error);
    return [];
  }

  return data || [];
};

/**
 * 강의안 목록 조회
 */
export const getLectures = async () => {
  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from('lectures')
    .select('*')
    .eq('is_published', true)
    .order('week_number', { ascending: true });

  if (error) {
    console.error('getLectures error:', error);
    return [];
  }

  return data || [];
};

/**
 * 강의안 상세 조회
 */
export const getLectureById = async (id) => {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from('lectures')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('getLectureById error:', error);
    return null;
  }

  return data;
};

/**
 * 강의안 등록
 */
export const createLecture = async (lectureData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('lectures')
    .insert(lectureData)
    .select()
    .single();

  if (error) throw error;
  return data;
};

/**
 * 강의안 수정
 */
export const updateLecture = async (id, lectureData) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { data, error } = await client
    .from('lectures')
    .update({ ...lectureData, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
};

/**
 * 강의안 삭제
 */
export const deleteLecture = async (id) => {
  const client = getSupabase();
  if (!client) throw new Error('Supabase not configured');

  const { error } = await client
    .from('lectures')
    .delete()
    .eq('id', id);

  if (error) throw error;
};

/**
 * 강의안 조회수 증가
 */
export const incrementLectureViews = async (id) => {
  const client = getSupabase();
  if (!client) return;

  await client.rpc('increment_lecture_views', { lecture_id: id }).catch(() => {});
};

export default getSupabase;
