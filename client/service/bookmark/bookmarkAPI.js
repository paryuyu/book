
class BookmarkAPI {
    constructor(baseURL) {
        this.baseURL = baseURL;

        this.getOption = {
            method: "get"
        }

        this.postOption = {
            method: "post",
            headers: {
                "content-type": "application/json"
            }
        }
    }


    //북마크 저장
    async bookmark(title, author, publisher, pubDate, cover, createdAt, isbn, description) {
       

        const data = { title, author, publisher, pubDate, cover, createdAt, isbn,description }
        const response = await fetch(this.baseURL + "/api/book/bookmark", {

            ...this.postOption,

            body: JSON.stringify(data)

        })

        return await response.json();
    }




    async delbookmark(isbn) {
       

        const response = await fetch(this.baseURL + "/api/book/delBookmark", {

            ...this.postOption,

            body: JSON.stringify({isbn})

        })

        return await response.json();
    }


    
    /**find */
    async bookmarkFind() {
        const response = await fetch(this.baseURL + "/api/book/findBookmark");
        return response.json();
    }

}

export default BookmarkAPI;