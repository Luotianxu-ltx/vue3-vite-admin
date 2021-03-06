import { defineStore } from 'pinia'
import { UserState } from '../interface/user'
import piniaPersistConfig from '@/config/piniaPersist'

export const UserStore = defineStore({
    id: 'UserState',
    state: (): UserState => ({
        USER_INFO: {}
    }),
    getters: {
    },
    actions: {
    },
    persist: piniaPersistConfig('UserState')
})
