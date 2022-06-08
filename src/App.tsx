import { useState } from 'react'
import Input from './components/Input'

function App() {
  const [cardNr, setCardNr] = useState('')
  const [cardHolder, setCardHolder] = useState('Your name')

  function handleCardNrChange(text: string) {
    if (text.length < cardNr.length) {
      setCardNr(text)
      return
    }
    let cardNrCopy = text
    if (text.replace(/\s/g, '').length > 16) return
    if (text.replace(/\s/g, '').length % 4 === 0) cardNrCopy = text + ' '
    setCardNr(cardNrCopy)
  }

  function maskOutput(cardNr: string): string {
    const cardNrSplit = cardNr.split(' ')
    // Kolla ifall de två mellersta "blocken" existerar, om så, ersätt med *
    if (cardNrSplit.length > 1) cardNrSplit[1] = '*'.repeat(cardNrSplit[1].length)
    if (cardNrSplit.length > 2) cardNrSplit[2] = '*'.repeat(cardNrSplit[2].length)
    return cardNrSplit.join(' ')
  }

  const cardNrMask = '#### #### #### ####'

  return (
    <div className="App grid h-screen place-content-center bg-blue-100 pt-12">
      <div className="z-10 mx-auto -my-6 w-64 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 p-4">
        <p className="text-right text-xl font-bold text-white">VISA</p>
        <p className="w-full py-4 text-xl text-white">
          {maskOutput(cardNr) + cardNrMask.slice(cardNr.length, cardNrMask.length)}
        </p>
        <div className="flex justify-between text-white">
          <div>
            <label className="text-[10px]" htmlFor="cardholder">
              Card Holder
            </label>
            <p className="text-sm uppercase">{cardHolder}</p>
          </div>
          <div>
            <label className="text-[10px]" htmlFor="cardholder">
              Expires
            </label>
            <p className="text-sm uppercase">MM / YY</p>
          </div>
        </div>
      </div>
      <div className="form w-96 rounded-lg bg-white p-12 shadow-lg">
        <Input id="cardnr" label="Card number" value={cardNr} handler={handleCardNrChange} />
        <Input id="cardholder" value={cardHolder} label="Card holder" handler={setCardHolder} />
        <button type="submit" className="w-full rounded-md bg-blue-600 p-3 text-center text-white">
          Submit
        </button>
      </div>
    </div>
  )
}

export default App
