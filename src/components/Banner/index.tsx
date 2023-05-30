import { BgBanner, BgHero, BgOpacity, Infos, Logo } from './styles'

//verificar essas importações para ver se possivel deixar
// em apenas uma linha
import bannerImg from '../../assets/images/vector.png'
import logo from '../../assets/images/logo.svg'

import { BtnLinkSecundario } from '../Button/styles'
import { Container } from '../ProductList/styles'
import { Restaurante } from '../../pages/Home'

export type Props = {
  weight?: 'small' | 'big'
  restaurante: Restaurante
}

const Banner = ({ restaurante }: Props) => {
  return (
    <>
      <BgHero style={{ backgroundImage: `url(${bannerImg})` }}>
        <Container>
          <BtnLinkSecundario to="/">Restaurantes</BtnLinkSecundario>
          <Logo src={logo} alt="EFOOD" />
          <BtnLinkSecundario to="/">Carrinho</BtnLinkSecundario>
        </Container>
      </BgHero>
      <BgBanner style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <BgOpacity>
          <Container>
            <Infos weight="small">{restaurante.type}</Infos>
            <Infos weight="big">{restaurante.title}</Infos>
          </Container>
        </BgOpacity>
      </BgBanner>
    </>
  )
}

export default Banner
