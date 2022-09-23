const express = require("express");
const router = express.Router();
const BookmarkSchema = require("../Model/bookmarkSchema.js");

// title: String,
// author: String,
// publisher : String,
// pubDate : String,
// cover : String

//북마크 값 입력
router.post("/bookmark", async (req, res) => {

    const bookmarkInput = {
        title: req.body.title,
        author: req.body.author,
        publisher: req.body.publisher,
        pubDate: req.body.pubDate,
        cover: req.body.cover,
        createdAt: req.body.createdAt,
        isbn: req.body.isbn
    }
    
    
    try {
        let createBookmark = await BookmarkSchema.create(bookmarkInput);
        console.log(req.body,"======================")

        res.json({ result: createBookmark, message: "입력성공" })
        console.log(createBookmark,"잘 등록되는지 확인")

    } catch (err) {
        res.json({ result: false, message: "내용을 다시 입력해주세요." })
    }

});


//북마크에서 제거
router.post("/delBookmark", async (req, res) => {
    let isbn = req.body.isbn
    console.log(isbn)
    try {
        
        let bookmarks = await BookmarkSchema.deleteOne({isbn:isbn}).lean();
        res.status(200).json({ result: bookmarks, message: "삭제성공" })
        
    } catch (e) {
        res.json({ result: false, message: "다시 시도해주세요." })
    }
});

//북마크 파인드
router.post("/findBookmark", async (req,res)=>{
    try{
        let bookmarks = await BookmarkSchema.find().sort(-createdAt).lean();
        res.status(200).json({ result: bookmarks, message: "find성공" })
    }catch (e) {
        res.json({ result: false, message: "find 다시 시도해주세요." })
    }
})


module.exports = router;