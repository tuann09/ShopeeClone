import type { User } from '~/types/user.type'
import type { ResponseApi } from '~/types/utils.type'

export type AuthResponse = ResponseApi<{ accessToken: string; expires: string; user: User }>
