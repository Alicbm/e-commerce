import React from 'react'
import { Carousel } from '../Carousel'
import { Categories } from '../Categories'
import { Comercial } from '../Comercial'
import { Details } from '../Details'
import { Recommendations } from '../Recommendations'
import { useAppSelector } from '../store/hooks'
import { ArrayProducts } from '../types'
import './Home.css'

export const Home = () => {
  const { mainUrl } = useAppSelector(state => state.mainReducer)
  const finalUrl = mainUrl + "/categories";

  const [recommendation, setRecommendation] = React.useState<ArrayProducts[]>([]);
  const [healthy, setHealthy] = React.useState<ArrayProducts[]>([]);

  React.useEffect(() => {
    const fetUrl = async () => {
      const res = await fetch(finalUrl);
      const json = await res.json();

      const dataRecommendation = json.find((category: ArrayProducts)  => category.name === 'Tecnology');      
      const dataHealthy = json.find((category: ArrayProducts)  => category.name == 'Work out');      

      const cutRecommendation = dataRecommendation.products.slice(0, 9);
      const cutHealthy = dataHealthy.products.slice(0, 9);

      setRecommendation(cutRecommendation)
      setHealthy(cutHealthy)
    };

    fetUrl();
  }, [finalUrl]);

  return (
    <div className='Home'>
      <Carousel />
      <div className='Home-container'>
        <Categories />
        <Recommendations title='Recommendation for you' data={recommendation}/>
      </div>
      <Comercial />
      <div className="Home-container">
        <Recommendations title='Healthy for you' data={healthy}/>
        <Details />
      </div>
    </div>
  )
}
