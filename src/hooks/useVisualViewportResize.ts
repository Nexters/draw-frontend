import { useEffect, useState } from 'react';

const useVisualViewportResize = () => {
  const [prevVisualViewport, setPrevVisualViewport] = useState(0);

  const handleVisualViewportResize = () => {
    if (typeof window === 'undefined' || !window.visualViewport) {
      return; // 비주얼 뷰포트 API가 지원되지 않거나 window 객체를 사용할 수 없는 경우
    }
    const currentVisualViewport = window.visualViewport.height;

    if (prevVisualViewport - 30 > currentVisualViewport && prevVisualViewport - 100 < currentVisualViewport) {
      const scrollHeight = document.body.scrollHeight;
      const scrollTop = scrollHeight - window.visualViewport.height;

      window.scrollTo(0, scrollTop); // 입력창이 키보드에 가려지지 않도록 조절
    }

    setPrevVisualViewport(window.visualViewport.height);
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !window.visualViewport) {
      return; // 비주얼 뷰포트 API가 지원되지 않거나 window 객체를 사용할 수 없는 경우
    }
    window.visualViewport.onresize = handleVisualViewportResize;

    // Clean up the event listener on component unmount
    return () => {
      if (typeof window === 'undefined' || !window.visualViewport) {
        return; // 비주얼 뷰포트 API가 지원되지 않거나 window 객체를 사용할 수 없는 경우
      }
      window.visualViewport.onresize = null;
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.visualViewport) {
      return;
    }
    if (prevVisualViewport === 0) {
      setPrevVisualViewport(window.visualViewport.height);
    }
  }, [prevVisualViewport]);

  return prevVisualViewport;
};
export default useVisualViewportResize;
