import React from 'react'
import { useNavigate } from 'react-router-dom'
import { nameCategory as setNameCategory } from '../features/mainSlices'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { ArrayCategory } from '../types'
import './Categories.css'

export const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

    const { mainUrl } = useAppSelector(state => state.mainReducer)
    const finalUrl = mainUrl + '/categories'
  
    const [url, setUrl] = React.useState <ArrayCategory[]>([]);
  
    React.useEffect(() => {
      const fetUrl = async () => {
        const res = await fetch(finalUrl)
        const json = await res.json();
        
        setUrl(json)
      } 
  
      fetUrl()
    }, [finalUrl]) 

    const handleCategories = (nameCategory: string) => {
      navigate('/products')
      dispatch(setNameCategory(nameCategory))
    }

  return (
    <div className='Categories'>
      <h1 className='Categories-title'>CATEGORIES</h1>
      <div className='Categories-container'>
        {
          url?.map((category: ArrayCategory) => (
            <div 
              onClick={() => handleCategories(category.name)}
              className='Categories-container__item'
              key={category.id}
              >
              <div className='Categories-container__item-image'>
                <img src={category.image} alt={category.name} />
              </div>
              <p className='Categories-container__item-name'>{ category.name }</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
