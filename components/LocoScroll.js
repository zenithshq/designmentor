// components/LocoScroll.js
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const LocoScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const locoScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        if (locoScroll) locoScroll.destroy();
      };
    }
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default LocoScroll;
