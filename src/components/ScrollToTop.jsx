    import { useLayoutEffect } from 'react';
    import { useLocation } from 'react-router-dom';

    const ScrollToTop = () => {
      const { pathname } = useLocation();

      useLayoutEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top-left corner
      }, [pathname]); // Dependency array ensures effect runs when pathname changes

      return null; // This component doesn't render any UI
    };

    export default ScrollToTop;