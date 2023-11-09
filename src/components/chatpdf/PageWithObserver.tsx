import { useIntersectionObserver } from "@wojtekmaj/react-hooks";
import { useCallback, useState } from "react";
import { Page } from "react-pdf";

const observerConfig = {
  // How much of the page needs to be visible to consider page visible
  threshold: 0,
};

function PageWithObserver({
  pageNumber,
  setPageVisibility,
  zoom,
  ...otherProps
}: any) {
  const [page, setPage] = useState<HTMLDivElement | null>(null);

  const onIntersectionChange = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      setPageVisibility(pageNumber, entry.isIntersecting);
    },
    [pageNumber, setPageVisibility]
  );

  useIntersectionObserver(page, observerConfig, onIntersectionChange);

  return (
    <Page
      canvasRef={setPage}
      pageNumber={pageNumber}
      scale={zoom}
      width={373}
      renderAnnotationLayer={false}
      renderTextLayer={false}
      {...otherProps}
    />
  );
}

export default PageWithObserver;
