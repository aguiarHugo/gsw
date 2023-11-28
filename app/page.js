import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Product from './sections/Product'


export default function Home() {
  return (
   <main className='bg-gsw_dark'>
    <Navbar />
    <Hero />
    <Product />
   </main>
  )
}
