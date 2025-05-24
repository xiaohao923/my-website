// C:\MyWebsite\server.js
const express = require('express');
const app = express();
const port = 80;
const ip = '192.168.50.140'

app.use(express.static(__dirname)); // 提供靜態檔案，例如 index.html

app.listen(port, ip, () => {
  console.log(`網站已啟動：http://${ip}:${port}`);
});
