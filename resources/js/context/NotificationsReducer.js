const addNotification = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    if(typeof payload=='array'){
        user.notifications=[...user.notifications,payload];
    }else{
        user.notifications.push(payload);
    }
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const storeNotifications = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    user.notifications = payload;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const updateNotification = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    user.notifications = user.notifications.map(notif=>{
        if(notif.id!=payload.id){
            return payload;
        }
        return notif;
    });
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const removeNotification = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    user.notifications = user.notifications.filter(notif=>notif.id!=payload.id);
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

export { addNotification, storeNotifications, updateNotification, removeNotification }