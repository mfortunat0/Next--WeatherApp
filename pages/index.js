import { useState } from 'react'
import Axios from 'axios'

export default function Home() {

  const [data, setData] = useState()
  const [inputData, setInputData] = useState("")

  const inputOnChange = e => setInputData(e.target.value)
  const getData = async () => {
    if (inputData.length > 0) {
      const result = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputData}&units=metric&appid=${process.env.KEY}`)
      setData({
        temp: parseInt(result.data.main.temp),
        description: result.data.weather[0].description,
        name: result.data.name
      })
      setInputData(result.data.name)
    }
  }

  return (
    <>
      <div className="inputContainer">
        <input placeholder="Your City" type="text" value={inputData} onChange={(e) => inputOnChange(e)} />
        <button onClick={getData}>Request</button>
      </div>
      <div className="bodyContainer">
        <div className="container">
          <div className="textContainer">
            {data ? (
              <>
                <h1>{data.name}</h1>
                <div>
                  <p>
                    {data.description}
                  </p>
                  <p>
                    {data.temp}°C
                  </p>
                </div>
              </>)
              :
              (
                <>
                  <h1>Empty</h1>
                </>
              )}
          </div>
        </div>
        <img src="/image.svg" alt="" />
      </div>
    </>
  )
}
