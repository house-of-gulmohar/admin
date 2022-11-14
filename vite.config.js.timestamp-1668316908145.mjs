// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// app.config.js
var config = {
  REPOSITORY: "admin"
};

// vite.config.js
var vite_config_default = defineConfig({
  base: `/${config.REPOSITORY}/`,
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAiYXBwLmNvbmZpZy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3FidXNlci9Eb2N1bWVudHMvUHJvamVjdHMvSG91c2Ugb2YgR3VsbW9oYXIvYWRtaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3FidXNlci9Eb2N1bWVudHMvUHJvamVjdHMvSG91c2Ugb2YgR3VsbW9oYXIvYWRtaW4vdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcWJ1c2VyL0RvY3VtZW50cy9Qcm9qZWN0cy9Ib3VzZSUyMG9mJTIwR3VsbW9oYXIvYWRtaW4vdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9hcHAuY29uZmlnJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYmFzZTogYC8ke2NvbmZpZy5SRVBPU0lUT1JZfS9gLFxuICBwbHVnaW5zOiBbcmVhY3QoKV1cbn0pXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3FidXNlci9Eb2N1bWVudHMvUHJvamVjdHMvSG91c2Ugb2YgR3VsbW9oYXIvYWRtaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3FidXNlci9Eb2N1bWVudHMvUHJvamVjdHMvSG91c2Ugb2YgR3VsbW9oYXIvYWRtaW4vYXBwLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9xYnVzZXIvRG9jdW1lbnRzL1Byb2plY3RzL0hvdXNlJTIwb2YlMjBHdWxtb2hhci9hZG1pbi9hcHAuY29uZmlnLmpzXCI7ZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgUkVQT1NJVE9SWTogJ2FkbWluJ1xufSJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlYsU0FBUyxvQkFBb0I7QUFDeFgsT0FBTyxXQUFXOzs7QUNEOFUsSUFBTSxTQUFTO0FBQUEsRUFDN1csWUFBWTtBQUNkOzs7QURHQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNLElBQUksT0FBTztBQUFBLEVBQ2pCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFDbkIsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
