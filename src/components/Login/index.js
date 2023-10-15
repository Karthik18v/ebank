import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  LoginFormContainer,
  Image,
  LoginForm,
  Label,
  Input,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    userId: '',
    pin: '',
    ErrorMsg: '',
  }

  enterUserIdDetails = event => {
    this.setState({userId: event.target.value})
  }

  enterPinDetails = event => {
    this.setState({pin: event.target.value})
  }

  successLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  failureLoginDetails = errorMsg => {
    this.setState({ErrorMsg: errorMsg})
  }

  submitLoginDetails = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const userDetails = {user_id: userId, pin}
    console.log(userDetails)
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, option)
    if (response.ok === true) {
      const data = await response.json()
      this.successLogin(data.jwt_token)
    } else {
      const data = await response.json()
      console.log(data)
      this.failureLoginDetails(data.error_msg)
    }
  }

  render() {
    const {ErrorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginFormContainer>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <LoginForm onSubmit={this.submitLoginDetails}>
            <h1>Welcome Back</h1>
            <Label htmlFor="userId">User ID</Label>
            <Input
              id="userId"
              type="text"
              placeholder="Enter User Id"
              onChange={this.enterUserIdDetails}
            />
            <Label htmlFor="PIN">PIN</Label>
            <Input
              id="PIN"
              type="password"
              placeholder="Enter Pin"
              onChange={this.enterPinDetails}
            />
            <LoginButton type="submit">Login</LoginButton>
            <ErrorMessage>{ErrorMsg}</ErrorMessage>
          </LoginForm>
        </LoginFormContainer>
      </LoginContainer>
    )
  }
}

export default Login
