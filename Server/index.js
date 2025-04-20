const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// ใช้ users array เป็นตัวหลักในการเก็บข้อมูล
let users = []
let counter = 1

/* เพิ่มเฉพาะ code ตรงนี้เข้าไป */

app.listen(8000, () => {
  console.log('Server started on port 8000')
})