import React from 'react'
import { Filter } from '../Filter'
import { FilterModal } from '../FilterModal'
import { ModalCategories } from '../ModalCategories'
import { Recommendations } from '../Recommendations'
import { SortModal } from '../SortModal'
import { useAppSelector } from '../store/hooks'
import { ArrayProducts } from '../types'
import './SelectedProducts.css'

export const SelectedProduct = () => {
  const { nameCategory, mainUrl } = useAppSelector(state => state.mainReducer)

  const finalUrl = mainUrl + "/categories";

  const [data, setData] = React.useState<ArrayProducts[]>([]);

  React.useEffect(() => {
    const fetUrl = async () => {
      const res = await fetch(finalUrl);
      const json = await res.json();

      const data = json.find((category: ArrayProducts)  => category.name == nameCategory);      
      setData(data.products);
    };

    fetUrl();
  }, [finalUrl, nameCategory]);

  console.log(data);
  

  return (
    <div className="SelectedProduct">
      <FilterModal />
      <ModalCategories />
      <Filter />
      <div className="SelectedProduct-container">
        <Recommendations title={nameCategory} data={data}/>
      </div>
      <SortModal />
    </div>
  );
}
