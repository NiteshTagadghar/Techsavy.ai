export const mockAuthenticate = (username, password)=> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'nitesh' && password === 'password') {
          resolve()
        } else {
          reject(new Error('Invalid credentials'))
        }
      }, 1000)
    })
  }
  