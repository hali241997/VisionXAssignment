import { UnsplashImage } from "@hooks/useAxiosUnsplashImages";

export type ImageListItemProps = Omit<UnsplashImage, "id">;
