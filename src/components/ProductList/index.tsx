import { Restaurante } from '../../pages/Home'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  restaurante: Restaurante[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductList = ({ restaurante }: Props) => {
  const getRestauranteTags = (restaurante: Restaurante) => {
    const tags = []

    if (restaurante.cardapio.preco.current) {
      tags.push(formataPreco(restaurante.cardapio.prices.current))
    }

    return tags
  }

  return (
    <Container>
      <List>
        {restaurante.map((restaurante) => (
          <li key={restaurante.id}>
            <Product
              id={restaurante.id}
              title={restaurante.title}
              description={restaurante.description}
              capa={restaurante.capa}
              avaliation={restaurante.avaliation}
              type={restaurante.type}
              restaurante={[]}
            />
          </li>
        ))}
      </List>
    </Container>
  )
}

export default ProductList
