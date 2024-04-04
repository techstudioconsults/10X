
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center '>
                <Skeleton className='rounded-lg  w-full lg:w-[300px] h-[385px]' />
                <Skeleton className='rounded-lg  w-full lg:w-[300px] h-[385px] '   />
                <Skeleton className='rounded-lg  w-full lg:w-[300px] h-[385px] '   />
                <Skeleton className='rounded-lg  w-full lg:w-[300px] h-[385px] '  />
                <Skeleton className='rounded-lg  w-full lg:w-[300px] h-[385px]' />
                <Skeleton className='rounded-lg  w-full lg:w-[300px] h-[385px] '   />
                <Skeleton className='rounded-lg  w-full lg:w-[300px] h-[385px] '   />
                <Skeleton className='rounded-lg  w-full lg:w-[300px] h-[385px] '  />
            </div>

            
  )
}

export default SkeletonLoader