import styled from 'styled-components'
import { cores } from '../../styles'
import { BtnLinkSecundario } from '../Button/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${cores.branca};
  position: relative;
  text-decoration: none;
  display: block;
`

export const CardBorder = styled.div`
  border: 1px solid ${cores.rosaEscuro};
  padding-bottom: 14px;
  margin-top: -8px;
`

export const CardPerfil = styled.div`
  background-color: ${cores.rosaEscuro};
  padding-bottom: 14px;
  position: relative;

  img {
    padding: 8px;
  }

  ${BtnLinkSecundario} {
    width: 304px;
  }
`

export const Titulo = styled.h3`
  font-size: 18px
  color: ${cores.rosaEscuro};
  font-weight: bold;
  margin-top: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin-left: 8px;
  }
`
export const TituloPerfil = styled.h3`
  font-size: 16px;
  color: ${cores.branca};
  weight: 900;
  padding: 8px;
  line-weight: 22px;
`

export const ContainerTitulo = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding: 8px;
  padding-bottom: 16px;
`

export const DescricaoPerfil = styled.p`
  color: ${cores.branca};
  font-size: 14px;
  line-height: 22px;
  padding: 8px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  padding-rigth: 8px;
`
export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    height: 1624px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  position: relative;
  height: 344px;
  width: 1024px;
  background-color: ${cores.rosaEscuro};
  z-index: 1;
  max-width: 1024px;
  top: 200px;
  align-items: center;
  display: block;
  padding: 32px;

  .position {
    display: flex;
  }

  .infos {
    padding-left: 24px;
  }

  ${DescricaoPerfil} {
    padding-top: 16px;
    padding-bottom: 20px;
  }
`

export const ImgProduto = styled.div`
  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
  }
`

export const Close = styled.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
