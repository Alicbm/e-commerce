import React from 'react'
import { CartPayment } from '../CartPayment'
import { CartProducts } from '../CartProducts'
import { ModalCategories } from '../ModalCategories'
import { ReletedProducts } from '../ReletedProducts'
import { useAppSelector } from '../store/hooks'
import { ArrayProducts } from '../types'
import './Cart.css'

export const Cart = () => {
  const { mainUrl } = useAppSelector(state => state.mainReducer)
  const [data, setData] = React.useState<ArrayProducts[]>([]);
  
  const finalUrl = mainUrl + "/products";  

  React.useEffect(() => {
    const fetUrl = async () => {
      const res = await fetch(finalUrl);
      const json = await res.json();

      let dataSelected = []

      for(let i = 0; i < 10; i++){
        const random = Math.floor(Math.random() * json.length - 1) + 1;
        dataSelected.push(json[random])
      }

      setData(dataSelected)      
    }

    fetUrl();
  }, [finalUrl]);

  return (
    <div className='Cart'>
      <ModalCategories />
      <div className="Cart-container">
        <div className="Cart-container__content">
          <CartProducts />
          <CartPayment />
        </div>
        <ReletedProducts data={data} title='Might interest you'/>
      </div>
    </div>
  )
}
