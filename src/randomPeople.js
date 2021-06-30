import { useState } from "react"
import { CircularProgress } from '@material-ui/core'

import './App.css';

const people = [
  "Adeel Raza",
  "Zain Zafar",
  "Ameeq Asrar",
  "Omer Zahid",
  "Shahzaib Shahid",
  "Ali Awais",
  "Muhammad Atif",
  "Faraz Pirzada",
  "Abdullah Umar",
  "Hassan Yamin",
  "Ali Adeel",
  "Rukham Khan",
  "Anees Sabir",
  "Muhammad Zeeshan",
  "Alina Fakhar",
  "Sania Khan",
  "Haseeb ur Rehman",
  "Hassan Asad",
  "Maham Bajwa",
  "Hasan Ayub",
  "Momina Asif",
  "Imran Hassan",
  "Eesha Arshad",
  "Ahsan Ejaz",
  "Mohsin Jamshed",
  "Taha Mazari",
  "Hamza Khurshid",
  "Muhammad Hamza",
  "Bilal Ahmad",
  "Ali Zahoor",
  "Ayesha Alvi"
]

const RandomPeople = () => {
  const [randomPerson, setRandomPerson] = useState("")
  const [loading, setLoading] = useState(false)

  const generate = () => {
    setRandomPerson("")
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      const randomNum = Math.floor(Math.random() * people.length)
      setRandomPerson(people[randomNum])
    }, 4000)
  }

  return (
    <div className="font-black bg-blue-300 h-screen">
      <div className="center-div w-full text-center">
        {
          randomPerson &&
          <div className="text-3xl text-blue-900">
            {randomPerson}
          </div>
        }
        {
          loading &&
          <div>
            <CircularProgress />
          </div>
        }
        <button disabled={loading} className="disabled:opacity-50 bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6" onClick={generate}>
          Generate
        </button>
      </div>
    </div>
  );
}

export default RandomPeople;
