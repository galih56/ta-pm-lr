
const storeProjects = (state, payload) => {
    var user = JSON.parse(localStorage.getItem('user'));

    user.projects = payload;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const storeDetailProject = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));

    const newProjects = user.projects.map((project) => {
        if (project.id == payload.id) {
            project = payload;
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