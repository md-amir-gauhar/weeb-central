const setAuthData = (data) => localStorage.setItem('auth', data)


const getAuthData = () => {
  return localStorage.getItem('auth') ? localStorage.getItem('auth') : null
}

const removeAuthData = () => {
  localStorage.removeItem('auth')
}



export { getAuthData, setAuthData, removeAuthData }