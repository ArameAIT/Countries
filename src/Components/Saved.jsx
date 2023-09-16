import React from 'react'
import { useSelector } from 'react-redux'
import { selectSaves } from '../store/slices/SavesSlice'
import Country from './Country';
import SavesCountry from './SavesCountry';

function Saved() {
  const saves = useSelector(selectSaves)
  console.log(saves);
  return (
    <div className='mt-[50px] flex justify-center items-center flex-wrap flex-3 gap-[40px] p-[10px] m-[20px]'>

      {
        saves.map((el)=>{
          return(
            <div key={Math.random()}>
              <SavesCountry info={el}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Saved