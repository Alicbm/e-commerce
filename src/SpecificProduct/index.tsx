import React from 'react'
import { Comments } from '../Comments'
import { Description } from '../Description'
import { useAppSelector } from '../store/hooks'
import { ArrayProducts } from '../types'
import { Warning } from '../Warning'
import { WriteComments } from '../WriteComments'
import './SpecificProduct.css'
import { Recommendations } from '../Recommendations'

export const SpecificProduct = () => {
  const { productSelected, mainUrl } = useAppSelector(state => state.mainReducer)
  
  const categorySelected = productSelected.categoryId;
  const finalUrl = mainUrl + "/categories/" + categorySelected;

  const [data, setData] = React.useState<ArrayProducts[]>([]);

  React.useEffect(() => {
    const fetUrl = async () => {
      const res = await fetch(finalUrl);
      const json = await res.json();

      const cutData = json.products.slice(0, 10);
      setData(cutData)
    }

    fetUrl();
  }, [categorySelected, finalUrl]);

  return (
    <div className='SpecificProduct'>
      <Description />
      <Warning />
      <div className='SpecificProduct-related'>
        <Recommendations data={data} title='Related Products'/>
      </div>
      <WriteComments />
      <Comments />
    </div>
  )
}
