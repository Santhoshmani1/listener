const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getSongs: async () => await ipcRenderer.invoke("get-songs"),
});
