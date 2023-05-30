import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import ProductList from '../../components/ProductList'
import Footer from '../../components/Footer'

export type Restaurante = {
  id: number
  title: string
  destacado: boolean
  type: string
  avaliation: string
  description: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    name: string
    description: string
    porcao: string
  }
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  if (!restaurantes) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <ProductList restaurante={restaurantes} />
      <Footer />
    </>
  )
}

export default Home
