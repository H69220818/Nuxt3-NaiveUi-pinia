import { ThemeModuleType } from "@/types/store";
import { defineStore } from "pinia";

const useThemeStore = defineStore("theme", {
  state: (): ThemeModuleType => {
    return {};
  }
});
