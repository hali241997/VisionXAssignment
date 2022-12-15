export interface UnsplashImage {
  id: string;
  url: string;
  name: string;
  likes: number;
}

export interface UseAxiosUnsplashImagesProps {
  searchQuery: string;
  pageNum?: number;
}
