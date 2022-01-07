import { createContext } from 'react';

const initState = {
    token: '', authenticated: false,
    id: '', username: '', email: '', profile_picture_path: '', 
    role: null, projects: [], 
    delayedRequest: [], googleAuth: null, 
    current_project_id:null,
    notifications:[],
    isAdmin:false
};

const getAuthDataFromStorage = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) return initState;
    var data = { ...user };
    if([1,2].includes(user.role?.id)){
        data.isAdmin=true;
    }else{
        data.isAdmin=false;
    }
    return data;
}

const storeAuthData = (payload) => {
    console.log('payload storeAuthData',payload)
    var token=payload.token.split(' ')[1];
    const user = {
        ...payload.user,
        projects: [], delayedRequest: [], googleAuth: null, 
        token: token, authenticated: true,
        notifications:[],
        isAdmin:false
    }
    localStorage.setItem("user", JSON.stringify(user));
    return { ...user };
}

const storeUserInformation=(payload)=>{
    var user = JSON.parse(localStorage.getItem('user'));
    user={...user,...payload};
    localStorage.setItem("user", JSON.stringify(user));
    return { ...user };
}

const storeGoogleAuth = (payload, state) => {
    const user = JSON.parse(localStorage.getItem('user'));
    user.googleAuth = payload;
    localStorage.setItem("user", JSON.stringify(user));
    const data = { ...user };
    return data
}


const storeCurrentSelectedProject = (payload, state) => {
    var user = JSON.parse(localStorage.getItem('user'));
    if(user){ user.current_project_id = payload; }
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const removeCurrentSelectedProject = (payload, state) => {
    var user = JSON.parse(localStorage.getItem('user'));
    if(user){ user.current_project_id = null; }
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}


const logout=()=>{
    var user = JSON.parse(localStorage.getItem('user'));
    user.authenticated=false;
    user.token='';
    localStorage.setItem("user", JSON.stringify(user));
    return user
}

const resetState = () => {
    const user = {
        id: '', username: '', email: '',
        profilePicturePath: '', role: null, 
        last_login: '', projects: [], delayedRequest: [],
        token: '', authenticated: false,
        notifications:[]
    }
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const runDelayedHTTPRequest = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user.delayedRequest) {

    }
}

const context = createContext();
export default context;
export { 
    initState, resetState, getAuthDataFromStorage, storeAuthData, logout,
    runDelayedHTTPRequest, storeGoogleAuth,
    storeCurrentSelectedProject,removeCurrentSelectedProject,storeUserInformation
};

