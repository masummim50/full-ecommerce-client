import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


const SkeletonCard = () => {
  return (
    <div className="p-2">
        <div className="card border-0">
          <SkeletonTheme color="rgb(213, 213, 213)">
            <Skeleton className="" height={200}/>
            <div>
              <Skeleton height={30}/>
              <SkeletonTheme color="rgb(213, 213, 213)" className="d-flex justify-content-between align-items-center">
                <Skeleton height={50}/>
              </SkeletonTheme>
            </div>
          </SkeletonTheme>
        </div>
    </div>
  );
};

export default SkeletonCard;