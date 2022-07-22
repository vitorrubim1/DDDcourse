import { SignUpController } from './SignUp'

describe('SignUp controller', () => {
  it('should return 400 if no name is provided', () => {
    // Instância do meu controller
    const sut = new SignUpController()

    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: '1234',
        confirmationPassword: '1234'
      }
    }

    const httpResponse = sut.handle(httpRequest)

    expect(httpResponse.statusCode).toBe(400)
  })
})
