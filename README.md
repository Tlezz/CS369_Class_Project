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
## ขั้นตอนการ deployment web application
### STEP 1 : ติดตั้ง NodeJS และ NPM
``` bash
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
NODE_MAJOR=28
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt-get update
sudo apt-get install nodejs -y
```
ติดตั้ง git
``` bash
sudo apt-get update -y
sudo apt-get install git -y
```
### STEP 2 : ติดตั้ง git และ clone repository
ตรวจสอบเวอร์ชั้นของ git
``` bash
git --version
```
clone git repository ลงมา
``` bash
git clone https://github.com/Tlezz/CS369_Class_Project.git
```
ย้ายเข้าไปใน directory และติดตั้ง packages
``` bash
cd client
npm install
```
build application
``` bash
npm run build
```
เช็คไฟล์ที่ build มา
``` bash
ls
# จะมี directory ที่ชื่อ build
```
### STEP 3 : ติดตั้ง nginx
ติดตั้ง nginx
``` bash
sudo apt install nginx -y
```
แสดงไฟล์ภายใน /var/www/html/ เพื่อดูไฟล์ที่ต้องแก้ไข
``` bash
ls -l /var/www/html/
```
ลบไฟล์ index.nginx-debian.html
``` bash
sudo rm /var/www/html/index.nginx-debian.html
```
คัดลอกไฟล์ build มาใส่ nginx html
``` bash
sudo cp -r build/* /var/www/html
```
ทดสอบการทำงานโดยการนำ Public IPv4 address มาค้นหา
