import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Cards from './Cards'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div>
        {/* <Navbar /> */}
        <Cards />
    </div>
  )
}
