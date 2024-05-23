
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const DetailsLoader = () => {
  return (
    <tr>
      <td className="px-4 py-4">
        <Skeleton className=""/>
      </td>
      <td className="px-4 py-4">
        <Skeleton className=" w-16"/>
      </td>
      <td className="px-4 py-4">
        <Skeleton className=" w-12"/>
      </td>
      <td className="px-4 py-4">
        <Skeleton className=" w-20"/>
      </td>
      <td className="px-4 py-4">
        <Skeleton className=" w-24"/>
      </td>
      
    </tr>
  )
}

export default DetailsLoader