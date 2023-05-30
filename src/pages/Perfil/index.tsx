import ProductListPerfil from '../../components/ProductListPerfil'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import { Restaurante } from '../Home'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const restaurante: Restaurante[] = []

const Perfil = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Banner restaurante={restaurante} />
      <ProductListPerfil restaurante={restaurante} />
      <Footer />
    </>
  )
}

export default Perfil
