const express = require('express');
const app = express();
const axios = require('axios');


//งานเติมคืน
//INIT_CARD_TOP_UP
//TOP_UP
//RETURN

//งานตัดจ่าย
//PAY

//งานสรุป
//SUMSHOP
//SUMMENU

//งานส่งพิมพ์
//ethernat.php∏

//งานติดต่อฐานข้อมูล mongodb
//Create record + add Card id + Push Cash + Option status (noreturn)
//Unlink Return + remove Card id  + Push Pay (ถ้า status เป็น noreturn คืนไม่ได้ ทำได้แค่เติม)
//Push Cash 
//Push Pay 

//MONGO ใช้ PRIMARY SLAVE


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port:${port}...`) );