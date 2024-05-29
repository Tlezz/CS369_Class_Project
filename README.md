# CS369_project

## created by
* ธนวินท์ ล้วนพฤกษ์ 6409682736
* นิธิกร ธนะสูตร 6409682777
##

### รายละเอียดเพิ่มเติม
#### ฐานข้อมูล
##### HOST 	   : sql12.freesqldatabase.com
##### USER  	 : sql12709675
##### DATABASE : sql12709675
##### PASSWORD : B58auKQ7He

## ขั้นตอนการ deployment server
### STEP 1 : ติดตั้ง NodeJS และ NPM ด้วย nvm
หลังจาที่ connect กับ เซิฟเวอร์ EC2 instance แล้ว พิมคำสั่ง
ติดตั้ง node version manager (nvm)
``` bash
sudo su -
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```
Activate nvm
``` bash
. ~/.nvm/nvm.sh
```
ใช้งาน nvm เพื่อติดตั้ง Node.js
``` bash
nvm install node
```
เช็คเวอร์ชั่นของ node และ npm
``` bash
node -v
npm -v
```
### STEP 2 : ติดตั้ง git และ clone repository
ติดตั้ง git
``` bash
sudo apt-get update -y
sudo apt-get install git -y
```
ตรวจสอบเวอร์ชั้นของ git
``` bash
git --version
```
clone git repository ลงมา
``` bash
git clone https://github.com/Tlezz/CS369_Class_Project.git
```
เช็ค folder ก่อนจะย้าย directory
``` bash
ls -ltr
```
ย้ายเข้าไปใน directory และติดตั้ง packages
``` bash
cd server
npm install
```
พิมคำสั่ง npm start เพื่อเริ่มต้นการทำงาน
``` bash
npm start
```

ทดสอบการทำงานโดยการนำ Public IPv4 address มาค้นหาและใส่ PORT 3306
``` bash
http://${address}:3306/

# PATH
# /api/products/
# /api/login/
# /api/products/${id}
```

