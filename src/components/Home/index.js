import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header/index'
import {
  MainContainer,
  CardContainer,
  CardImage,
  Title,
} from './styledComponents'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }

  return (
    <MainContainer>
      <Header />
      <CardContainer>
        <Title>Your Flexibility, Our Excellence</Title>
        <CardImage
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
          alt="digital card"
        />
      </CardContainer>
    </MainContainer>
  )
}

export default Home
