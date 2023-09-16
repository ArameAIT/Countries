import { useEffect , useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import { forCountryies, getCountry } from "./store/slices/CountrySlice"
import Country from "./Components/Country"

function App() {
  const [change, setChange] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all").then((response) => {
      return response.json()
    }).then((resp) => {
      const arr = []
      for (let index = 0; index < 25; index++) {
        arr.push(resp[Math.ceil((Math.random() * 250))])
        // let randomIndex = Math.ceil(Math.random() * 250);
        // let randomValue = resp[randomIndex];

        // if (randomValue !== 0) {
        //   arr.push(randomValue);
        // }
      }
      dispatch(forCountryies({
        country: arr
      }))
    })
  }, [change])

  const country = useSelector(getCountry)
  console.log(country);

  return (
    <div>
      <div className="flex justify-center items-center p-6">
        <button onClick={()=> setChange(prev => prev + 1)} className=" text-white border p-5 rounded-full bg-red-600 font-bold hover:opacity-75 transition">Change Countries</button>
      </div>
      <div className='mt-[50px] flex justify-center items-center flex-wrap flex-3 gap-[40px] p-[10px] m-[20px]'>
        {
          country.map((el) => {
            return (
              <div key={Math.random()}>
                <Country info={el} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App
