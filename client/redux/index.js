
const {configureStore} = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: { bookmarkRedux : bookmarkSlice.reducer}
})

export default store;