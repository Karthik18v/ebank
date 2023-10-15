import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #152850;
`
export const LoginFormContainer = styled.div`
  height: 70vh;
  display: flex;
  background-color: #c3cad9;
  border-radius: 10px;
  align-items: center;
  width: 60vw;
`

export const Image = styled.img`
  height: 70vh;
  width: 60%;
  border-radius: 10px;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  height: 100%;
  width: 40%;
  border-radius: 10px;
`
export const Label = styled.label`
  font-family: bold;
  margin-top: 10px;
`

export const Input = styled.input`
  height: 30px;
`
export const LoginButton = styled.button`
  background-color: #1565d8;
  padding: 10px;
  margin-top: 10px;
  border: 0px;
  color: white;
  font-weight: 600;
`
export const ErrorMessage = styled.p`
  font-size: 15px;
  color: red;
`
