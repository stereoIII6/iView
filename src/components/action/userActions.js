import {
    LOAD_USERS,
    SET_SCREEN_MODE,
    GET_ERC721_TX
} from "./types";


export const getUsers = (feed, net, bal) => {
    console.log("ACTION // get users ", feed, net, bal);
    return {
        type: LOAD_USERS,
        net: net,
        bal: bal,
        payload: feed
    }
};

export const setScreenMode = (feed) => {
    console.log("ACTION // set screen mode ", feed);
    return {
        type: SET_SCREEN_MODE,
        payload: feed
    }
};

export const getWalletERC721 = (jsonAPI) => {
    console.log("ACTION // getting wallet info on ERC721s");
    return {
        type: GET_ERC721_TX,
        payload: jsonAPI
    }
};