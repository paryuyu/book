//express 설정
const express = require("express");
const app = express();

//몽구스 설정
const mongoose = require("mongoose");
const uri = "mongodb+srv://mernyuyu:mernyu11@cluster0.qeg74yn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { dbName: "books" });

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