const { createSlice } = require("@reduxjs/toolkit");

const bookmarkSlice = createSlice({
    name: "bookmark",
    initialState: [],
    reducers: {
        addBookmark: (state, action) => {
            console.log("bookmarkSlice.addBookmark");
            return [...state, action.payload]
        },
        removeBookmark: (state, action) => {
            console.log("bookmarkSlice.removeBookmark");
            return state.filter((one) => one !== action.payload);
        }
    }
});

const addBookmark = bookmarkSlice.actions.addBookmark;
const removeBookmark = bookmarkSlice.actions.removeBookmark;
module.exports = { bookmarkSlice, addBookmark, removeBookmark };
// export const {addBookmark, removeBookmark} = bookmarkSlice.actions;