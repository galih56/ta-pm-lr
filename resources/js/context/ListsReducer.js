const createNewList = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        if (project.id == payload.projects_id) {
            project.columns.push(payload);
        }
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const removeList = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    console.log('removeList',payload)
    const newProjects = user.projects.map((project) => {
        if (project.id == payload.projects_id) {
            project.columns = project.columns.filter(column => {
                if (column.id != payload.id ) {
                    return column;
                }
            });
        }
        return project;
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}


const updateList = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        if (project.id == payload.project) {
            project.columns = project.columns.map((column) => {
                if (column.id == payload.id) {
                    column.title = payload.title;
                }
                return column;
            })
        }
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

export { createNewList, removeList, updateList }