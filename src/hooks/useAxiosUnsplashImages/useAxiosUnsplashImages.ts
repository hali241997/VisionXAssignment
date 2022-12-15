import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { UnsplashImage, UseAxiosUnsplashImagesProps } from "./types";

const useAxiosUnsplashImages = ({
  searchQuery = "",
  pageNum = 1,
}: UseAxiosUnsplashImagesProps) => {
  const [response, setResponse] = useState<UnsplashImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const timeoutRef = useRef<number>();

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axios(
        `https://api.unsplash.com/search/photos?page=${pageNum}&per_page=10&query=${searchQuery}&client_id=CuM_rNqU2y7eszVFg7VO5-zH1Ff9jz3I_yAzGukju1s`,
      );
      const results = res.data.results;

      const tempRes: UnsplashImage[] = results.map((item: any) => {
        return {
          id: item.id + item.description,
          url: item.urls.small,
          name: `${item.user.first_name} ${item.user.last_name}`,
          likes: item.likes,
        };
      });

      setResponse(prevState => [...prevState, ...tempRes]);
    } catch (err) {
      setError(err as unknown as string);
    } finally {
      setIsLoading(false);
    }
  }, [pageNum, searchQuery]);

  const debounceApiCall = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (searchQuery === "") {
      setResponse([]);
      return;
    }

    timeoutRef.current = setTimeout(fetchData, 1000);
  }, [fetchData, searchQuery]);

  useEffect(() => {
    debounceApiCall();
  }, [debounceApiCall]);

  return {
    response,
    isLoading,
    error,
  };
};

export default useAxiosUnsplashImages;
