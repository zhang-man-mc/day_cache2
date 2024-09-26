import { defineStore } from 'pinia'

export const useCurrentUserStore = defineStore('currentUser', {
  state: () => ({ username: '', isAdmin: false, roleId: 0, isConfirmed: false }),
  actions: {
    saveUserName(data) {
      this.username = data
      localStorage.setItem('currentUserName', data)
    },
    loadUserName() {
      const data = localStorage.getItem('currentUserName')
      if (data) {
        this.username = data
      } else {
        this.username = ''
      }
    },
    saveAdmin(isAdmin) {
      this.isAdmin = isAdmin
      localStorage.setItem('isAdmin', isAdmin)
    },
    loadAdmin() {
      this.isAdmin = localStorage.getItem('isAdmin')
    },
    saveRoleId(roleId) {
      this.roleId = roleId
      localStorage.setItem('roleId', roleId)
    },
    loadRoleId() {
      this.roleId = parseInt(localStorage.getItem('roleId'))
    },
    saveConfirmed(isConfirmed) {
      this.isConfirmed = isConfirmed
      localStorage.setItem('isConfirmed', isConfirmed)
    },
    loadConfirmed() {
      this.isConfirmed = localStorage.getItem('isConfirmed')
    }
  }
})
