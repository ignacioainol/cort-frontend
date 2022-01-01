import { createContext, useReducer } from "react";
import appReducer from './AppReducer';

const initialState = {
    escorts: [
        {
            id: "1",
            nickname: "Escort 1",
            age: "22 añitos",
            avatar: "https://img1.vod.com/image2/star/213/Lana_Rhoades-213699.32322484781579541615large.jpg",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis repellat unde quibusdam ullam iste est delectus ab, iure ex adipisci nemo officia repudiandae voluptas natus sed esse optio ducimus? Quod!"
        },
        {
            id: "2",
            nickname: "Escort 2",
            age: "34 años",
            avatar: "https://64.media.tumblr.com/208ba1ba4087c3e3e6cf9021a60f30b7/3d74b7db9e12b852-d5/s640x960/c34bddb6aeeecfd58942de426823fc22b1ae141f.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero optio a laudantium, aliquam nihil ipsum quaerat ullam error itaque recusandae veniam eaque quibusdam blanditiis maiores eveniet voluptates dolore unde impedit!"
        },
        {
            id: "3",
            nickname: "Escort 3",
            age: "34 años",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWm6JniQEzVTeG_w39CxXd5aMcQUyNLG1p6Q&usqp=CAU",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero optio a laudantium, aliquam nihil ipsum quaerat ullam error itaque recusandae veniam eaque quibusdam blanditiis maiores eveniet voluptates dolore unde impedit!"
        },
        {
            id: "4",
            nickname: "Escort 4",
            age: "34 años",
            avatar: "https://pbs.twimg.com/media/C4qjJvYVcAAQ_IY.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero optio a laudantium, aliquam nihil ipsum quaerat ullam error itaque recusandae veniam eaque quibusdam blanditiis maiores eveniet voluptates dolore unde impedit!"
        },
        {
            id: "5",
            nickname: "Escort 5",
            age: "34 años",
            avatar: "https://i.ebayimg.com/images/g/pLAAAOSwTSlc84zE/s-l400.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero optio a laudantium, aliquam nihil ipsum quaerat ullam error itaque recusandae veniam eaque quibusdam blanditiis maiores eveniet voluptates dolore unde impedit!"
        },
        {
            id: "6",
            nickname: "Escort 6",
            age: "34 años",
            avatar: "https://img4.hotnessrater.com/6335267/alexis-monroe-lingerie.jpg",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero optio a laudantium, aliquam nihil ipsum quaerat ullam error itaque recusandae veniam eaque quibusdam blanditiis maiores eveniet voluptates dolore unde impedit!"
        },
    ]
}

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(appReducer, initialState);

    const addEscort = (escort) => {
        dispatch({ type: 'ADD_ESCORT', payload: { id: 3, nickname: 'new escort' } });
    }

    return <GlobalContext.Provider value={{ ...state, addEscort }}>
        {children}
    </GlobalContext.Provider>
}