import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import {HeaderContainer, Image, Button} from './styledComponents'

const Header = props => {
  const onClickLogOut = () => {
    const {history} = props
    console.log(history)
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <HeaderContainer>
      <Link to="/">
        <Image
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
      </Link>

      <Button type="button" onClick={onClickLogOut}>
        Logout
      </Button>
    </HeaderContainer>
  )
}
export default withRouter(Header)
