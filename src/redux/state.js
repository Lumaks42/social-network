import { rerenderAllTree } from "../render";

let state = {
    profilePage: {
        postsData: [
            {id: 1, name: 'Alisa', postText: "It's not a good idea to follow the white rabbit.", likes: 20},
            {id: 2, name: 'Cats', postText: "Oh, the rabbit is my friend.", likes: 15},
          ],
    },

    messagePage: {

        dlgData: [
            {id: 1, name: 'Lumaks', msgMin: 'Война - это мир,'},
            {id: 2, name: 'Arkein', msgMin: 'Is that a skaint '},
            {id: 3, name: 'Luksi', msgMin: 'Уверена, что нам'},
            {id: 4, name: 'Kain', msgMin: 'Народ, вы где? a'},
            {id: 5, name: 'Avele', msgMin: 'Мне кажется вы не'},
            {id: 6, name: 'Stocks', msgMin: 'Что значит не зан'},
        ],

        msgData: [
            {id: 1, name: 'Lumaks', textMsg: 'Hey, Professor. I need brain food.'},
            {id: 2, name: 'Arkein', textMsg: "I think you're thinking too much."},
            {id: 3, name: 'Lumaks', textMsg: 'Is that a bad thing?'},
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        name: 'Roma',
        postText: postMessage,
        likes: 0
    };

    state.profilePage.postsData.push(newPost);
    rerenderAllTree(state);
}

export let addMsg = (newText) => {
    let newMsg = {
        id: 3, 
        name: 'Loomax',
        textMsg: newText,
    };

    state.messagePage.msgData.push(newMsg);
    rerenderAllTree(state);
}

export default state;