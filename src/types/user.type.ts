type Role = 'User' | 'Admin'
export interface User {
  _id: string
  email: string
  name: string
  phone: string
  date_of_birth: null
  address: string
  roles: Role[]
  createdAt: string
  updatedAt: string
}
