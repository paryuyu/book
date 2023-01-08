//express 설정
const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
//몽구스 설정
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO, { dbName: "books" });

//바디 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
//백엔드 서버 경로 설정하기.
const book = require("./router/book")
//검색값 중에 작가랑 제목, 출판사, 페이지 수 까지만 모델로 설정.

//경로설정
app.use("/api/book", book)
//회원가입 + 로그인값 받아오기.(구현해야함.)

app.listen(8080, ()=>{
    console.log("serverStart")
})