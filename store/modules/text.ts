import { defineStore } from "pinia";
import { AclModuleType } from "../../types/store";
export const useAclStore = defineStore("acl", {
  state: (): AclModuleType => ({
    admin: false,
    role: [],
    permission: [],
    text: "12333"
  }),
  getters: {
    getAdmin: (state) => state.admin,
    getRole: (state) => state.role,
    getPermission: (state) => state.permission
  },
  actions: {
    setText(text: string) {
      this.text = text;
    },
    setFull(admin: boolean) {
      this.admin = admin;
    },
    setRole(role: string[]) {
      this.role = role;
    },
    setPermission(permission: string[]) {
      this.permission = permission;
    }
  }
});
