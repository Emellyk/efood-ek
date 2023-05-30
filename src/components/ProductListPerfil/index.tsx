import { Container, List } from './styles'
import { ProductPerfil } from '../Product'
import { Restaurante } from '../../pages/Home'

type Props = {
  restaurante: Restaurante[]
}

const ProductListPerfil = ({ restaurante }: Props) => (
  <Container>
    <List>
      {restaurante.map((restaurante) => (
        <li key={restaurante.id}>
          <ProductPerfil
            id={restaurante.id}
            description={restaurante.description}
            capa={restaurante.capa}
            title={restaurante.title}
            type={restaurante.type}
            avaliation={restaurante.avaliation}
            restaurante={[restaurante]}
          />
        </li>
      ))}
    </List>
  </Container>
)

export default ProductListPerfil
