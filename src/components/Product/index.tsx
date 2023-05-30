import {
  Card,
  CardBorder,
  CardPerfil,
  ContainerTitulo,
  Descricao,
  Titulo,
  TituloPerfil,
  Infos,
  DescricaoPerfil,
  ModalContent,
  ImgProduto,
  ModalContainer,
  Close
} from './styles'
import star from '../../assets/images/star_icon.png'
import fechar from '../../assets/images/fechar_icon.png'

import Tag from '../Tag'
import { BtnLinkSecundario } from '../Button/styles'
import Button from '../Button'
import { Key, useState } from 'react'
import { formataPreco } from '../ProductList'
import { Restaurante } from '../../pages/Home'

type Props = {
  title: string
  image: string
  type: string
  avaliation: string
  description: string
  id: number
  restaurante: Restaurante[]
}

const Product = ({
  title,
  image,
  type,
  avaliation,
  description,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <Card to={`/perfil/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        <Tag>Destaque do dia</Tag>
        {type.map((type) => (
          <Tag key={type}>{type}</Tag>
        ))}
      </Infos>
      <CardBorder>
        <ContainerTitulo>
          <Titulo>{title}</Titulo>
          <Titulo>
            {avaliation}
            <img src={star} alt="estrela" />
          </Titulo>
        </ContainerTitulo>
        <Descricao>{getDescricao(description)}</Descricao>
        <Button type="link" to={`/perfil/${id}`} title="Conheça nossos pratos">
          Saiba mais
        </Button>
      </CardBorder>
    </Card>
  )
}

export default Product

export const ProductPerfil = ({
  title,
  image,
  description,
  id,
  restaurante
}: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      <CardPerfil className={modalEstaAberto ? 'visivel' : ''}>
        <img src={image} alt={title} />
        <TituloPerfil>{title}</TituloPerfil>
        <DescricaoPerfil>{description}</DescricaoPerfil>
        <BtnLinkSecundario
          type="link"
          to={`/perfil/${id}`}
          title="Adicione ao carrinho"
          onClick={() => setModalEstaAberto(true)}
        >
          Adicionar ao carrinho
        </BtnLinkSecundario>
      </CardPerfil>
      <ModalContainer className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent className="container">
          <Close>
            <img
              src={fechar}
              alt="Botão para fechar"
              onClick={() => setModalEstaAberto(false)}
            />
          </Close>
          <div className="position">
            <ImgProduto>
              <img src={restaurante.cardapio.foto} alt="Pizza Marguerita" />
            </ImgProduto>
            <div className="infos">
              <TituloPerfil>{restaurante.cardapio.name}</TituloPerfil>
              <DescricaoPerfil>
                {restaurante.cardapio.description}
              </DescricaoPerfil>
              <DescricaoPerfil>
                Serve: ${restaurante.cardapio.porcao}
              </DescricaoPerfil>
              <BtnLinkSecundario
                type="link"
                to={`/perfil/${id}`}
                title="Adicione ao carrinho"
              >
                Adicionar ao carrinho{' '}
                {formataPreco(restaurante.cardapio.preco.current)}
              </BtnLinkSecundario>
            </div>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
      </ModalContainer>
    </>
  )
}
