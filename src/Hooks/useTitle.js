import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Euphonious Whiz`;
  }, [title]);
};

export default useTitle;
