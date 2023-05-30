import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalContent = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;
`

export const ModalContainer = styled.div`
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
`
