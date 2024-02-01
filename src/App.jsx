import React, { useState, useCallback, useEffect, useRef } from 'react'

const App = () => {

  const [length, setlength] = useState("8")
  const [number, setnumber] = useState(false)
  const [char, setchar] = useState(false)
  const [password, setpassword] = useState("")

  //Use callback React
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str += "!@#$%^&*~/<>"

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)

    }
    setpassword(pass)

  }, [length, number, char, setpassword])

  //useEffect
  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, passwordGenerator])

    //Useref
    const passwordRef = useRef(null)
    const [clicked, setClicked] = useState(false);

    const copyPassword = () => {
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
      setClicked(true);
      // Reset the message after 2 seconds
      setTimeout(() => {
        setClicked(false);
      }, 2000);
    }

  return (
    <div className=' min-h-screen p-3 bg-slate-600 text-white'>
      <h1 className=' bg-black text-blue-400 bg-opacity-50 m-5 text-center p-3 font-extrabold sm:text-5xl text-4xl rounded-xl'>Password Generator</h1>
      <div className=' text-center m-5 p-3 bg-black bg-opacity-50 rounded-xl'>
        <div className=' flex flex-shrink justify-center items-center mt-7'>
          <input
            className=' bg-slate-500 h-12 w-80 text-xl rounded-l-xl border-white border-2  border-r-0 text-center'
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button 
          className=' h-12 w-14 flex-shrink bg-blue-600 rounded-r-xl border-white border-2 hover:bg-blue-800'
          onClick={copyPassword}
          >{(!clicked && <p>Copy</p>)||(clicked && <p className=' font-bold'>Copied</p>)}</button>
          
        </div>
        <div className=' mt-5 mb-2 text-xl text-yellow-300'>
          <h2>
            Choose Your Preference of Password :
          </h2>
        </div>
        <div className=' mb-5 flex flex-wrap justify-center items-center '>
          <div className=' h-fit w-fit  m-2 text-xl'>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => {
              setlength(e.target.value)
            }}
          />
          <label>Length: {length}</label>
          </div>
          <div className=' h-fit w-fit  m-2 text-xl'>
          <input type="checkbox"
            defaultChecked={number}
            onChange={() => {
              setnumber(!number)
            }}
          />
          <label>Number</label>
          </div>

          <div className=' h-fit w-fit m-2 text-xl'>
          <input type="checkbox"
            defaultChecked={char}
            id=""
            onChange={() => {
              setchar(!char)
            }} />
          <label>Character</label>
          </div>

        </div>
      </div>
      <div  className=' text-center m-5 p-5 bg-black bg-opacity-50 text-green-200 rounded-xl flex-row flex-wrap'>
        <h1 className=' text-2xl font-bold'>Assalamualaikum, I'm Rakin Absar</h1>
        <p>This webpage is your go-to for <b>generating random passwords</b> with ease. It offers control over crucial factors like <b>password length, inclusion of numbers, and special characters</b>. Whether you prefer a short and simple password or a lengthy and intricate one, the choice is yours. Additionally, you can decide whether numbers and special characters should be part of your password's composition. Its user-friendly interface ensures a seamless experience, allowing you to tailor your password to your specific needs. With its straightforward design and customizable options, this webpage simplifies the process of creating secure passwords for all your online needs.</p>
      </div>
    </div>
  )
}

export default App
