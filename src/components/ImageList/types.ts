import { UnsplashImage } from "@hooks/useAxiosUnsplashImages";

export interface ImageListProps {
  images: UnsplashImage[] | undefined;
  updatePageNum: VoidFunction;
}
