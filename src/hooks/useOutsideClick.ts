import { LegacyRef, MutableRefObject, RefObject, useEffect, useRef } from "react";

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<any>();

  useEffect(() => {
    const handleClick = (e:any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
