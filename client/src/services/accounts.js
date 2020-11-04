import api from './apiConfig'

export const getAccounts = async () => {
  try {
      const response = await api.get('/accounts')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getAccount = async id => {
  try {
      const response = await api.get(`/accounts/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createAccount = async account => {
  try {
      const response = await api.post('/accounts', account)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateAccount = async (id, account) => {
  try {
      const response = await api.put(`/accounts/${id}`, account)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteAccount = async id => {
  try {
      const response = await api.delete(`/accounts/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export function compound(account, n, t = 12) { // t = 365 if you want days, 12 if you want months, 1 if you want years
  return account.balance * ((1 + account.interest) ** (n / t))
}