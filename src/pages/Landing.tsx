import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import StringInput from '@/components/StringInput'
import Slider from '@/components/Slider'
import DecimalInput from '@/components/DecimalInput'
import ButtonOptions from '@/components/ButtonOptions'

const inter = Inter({ subsets: ['latin'] })

//Unused function, wanted to use it to test whether the URL input is correct
function handleChange(e: any){
  const string = '^https://www.rightmove.co.uk/properties/';
  const regexp = new RegExp(string);
  console.log(e);
  return regexp.test(e.target.value)
}

export default function Landing() {
  return (
    <>
      <h1>
        Welcome to Keyzy!
      </h1>
      <div className="flex">
        <div className='item'>
          <h2 className='font-bold'>Inputs</h2>
          <StringInput label='URL' defaultText='...' onChange={handleChange} />
          <Slider label='Discount vs asking price' min={0} max={30} defaultValue={15} increment={1}/>
          <DecimalInput label='Desired yield' defaultText={6.0} />
          <Slider label='Converted rent rate' min={10} max={25} defaultValue={20} increment={5}/>
          <ButtonOptions label='Duration' defaultOption='5 years' options={['3 years', '5 years', '7 years']}/>
        </div>
        <div className='item'>Section 2</div>
      </div>
    </>
  )
}
