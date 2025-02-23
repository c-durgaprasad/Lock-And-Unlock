// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: linear-gradient(#0b0c1e, #3c2940);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const LockImg = styled.img`
  width: 110px;
  margin-top: 180px;
  @media screen and (min-width: 768px) {
    width: 80px;
  }
`

export const LockHeading = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 15px;
  font-weight: 400;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const LockButton = styled.button`
  width: 98px;
  height: 40px;
  font-family: 'Roboto';
  color: #ffffff;
  border-radius: 12px;
  background-color: #06b6d4;
  margin-top: 200px;
  @media screen and (min-width: 768px) {
    width: 80px;
    height: 40px;
    font-size: 14px;
    margin-top: 100px;
  }
`
