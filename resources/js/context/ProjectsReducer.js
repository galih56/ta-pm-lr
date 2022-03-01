const average = arr => {
    var result=0
    if(typeof arr !== 'undefined'){
        var avg=arr.reduce((sum,data) => {
            return sum + data.progress
        }, 0) / arr.length
        result=avg
    }
    return result;
};

const storeProjects = (state, payload) => {
    var user = JSON.parse(localStorage.getItem('user'));

    user.projects = payload;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const storeDetailProject = (state,payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    const newProjects = state.projects.map((project) => {
        if (project.id == payload.id) {
            project =payload;
            if(project.columns){
                project.progress=average(project.columns)
            }
        }
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const createNewProject = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    user.projects.push(payload);
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const removeProject = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));

    const newProjects = user.projects.filter((project) => {
        if (project.id != payload.projects_id) {
            return project;
        }
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}


export { storeProjects, storeDetailProject, createNewProject, removeProject }