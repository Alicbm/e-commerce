import React from 'react'
import { CartPayment } from '../CartPayment'
import { CartProducts } from '../CartProducts'
import { useAppSelector } from '../store/hooks'
import { ArrayProducts } from '../types'
import { Recommendations } from '../Recommendations'
import './Cart.css'

export const Cart = () => {
  const { mainUrl } = useAppSelector(state => state.mainReducer)
  const [data, setData] = React.useState<ArrayProducts[]>([]);
  
  const finalUrl = mainUrl + "/products";  

  React.useEffect(() => {
    const fetUrl = async () => {
      const res = await fetch(finalUrl);
      const json = await res.json();

      let dataSelected: ArrayProducts[] = []

      for (let i = 0; i < 15; i++) {
        const random = Math.floor(Math.random() * json.length - 1) + 1;
        if (!dataSelected.includes(json[random])) {
          dataSelected.push(json[random])
        }
      }
            
      setData(dataSelected)      
    }

    fetUrl();
  }, []);

  return (
    <div className='Cart'>
      <div className="Cart-container">
        <div className="Cart-container__content">
          <CartProducts />
          <CartPayment />
        </div>
        <div className='Cart-container__interest'>
          <Recommendations data={data} title='Might interest you'/>
          {/* <ReletedProducts data={data} title='Might interest you'/> */}
        </div>
      </div>
    </div>
  )
}
