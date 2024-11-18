export const mockAuthenticate = (username, password)=> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin@gmail.com' && password === 'password') {
          resolve()
        } else {
          reject(new Error('Invalid credentials'))
        }
      }, 1000)
    })
  }
  
