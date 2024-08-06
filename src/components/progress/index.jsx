import React, { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const Progress = ({ isAnimating }) => {
  {
    /* <InfinitySpin
            visible={true}
            width="200"
            color="#4fa94d"
            ariaLabel="infinity-spin-loading"
          /> */
  }
  useEffect(() => {
    if (isAnimating) {
      NProgress.start();
    } else {
      NProgress.done();
    }

    return () => {
      NProgress.remove();
    };
  }, [isAnimating]);

  return null;
};

export default Progress;
