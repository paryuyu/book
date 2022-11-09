//삭제 될 때 북마크에 이벤트 발생 -> state값 하나 만들어서 그거 바뀔 때마다 useEffect=> find쪽 다시 해주기
import { createContext, useEffect, useState } from "react";

export const BookmarkContext = createContext({});

export function BookmarkContextProvider({ children }) {
    const [bookmarkScr, setBookmarkScr] = useState(null);

    return (<BookmarkContext.Provider value={{bookmarkScr, setBookmarkScr}}>
        {children}
    </BookmarkContext.Provider>);
}