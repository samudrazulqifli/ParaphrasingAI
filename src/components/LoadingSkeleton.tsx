import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = ({ count, height, width, radius }: any) => {
  return (
    <SkeletonTheme >
      <p>
        <Skeleton
          count={count}
          height={height}
          width={width}
          borderRadius={radius}
        />
      </p>
    </SkeletonTheme>
  );
};

export default LoadingSkeleton;
