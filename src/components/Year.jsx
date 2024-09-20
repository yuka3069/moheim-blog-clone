import { useCallback, useEffect, useRef, useState } from "react";

function Year({ children }) {
  const yearRef = useRef(null);
  const timeoutId = useRef(null);
  const debounce = (fn, delay) => {
    return function (...args) {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
        console.log("dadad" + timeoutId.current);
      }
      timeoutId.current = setTimeout(fn(...args), delay);
      console.log(setTimeout(fn(...args), delay));
    };
  };

  const handleScrollEvent = () => {
    // const yearTop = yearRef.current.getBoundingClientRect().top;
    const scrollHeight = window.scrollY;
    // console.log(yearRef.current.getBoundingClientRect());
    if (scrollHeight > 300) {
      yearRef.current.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0,${scrollHeight - 300} , 0, 1)`;
    } else {
      yearRef.current.style.transform = "";
    }
  };

  useEffect(() => {
    const debouncedScrollHandler = debounce(handleScrollEvent, 1000 * 3);
    window.addEventListener("scroll", debouncedScrollHandler);

    return () => {
      window.removeEventListener("scroll", debouncedScrollHandler);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [debounce, handleScrollEvent]);
  return (
    <div
      className="mt-[calc(-95px-0.15em)] hidden h-[388px] pr-[1em] pt-[95px] text-[2.2rem] leading-[1] sm:block sm:w-[32.2%]"
      id="year"
      ref={yearRef}
    >
      {children}
    </div>
  );
}
export default Year;
