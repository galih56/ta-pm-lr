const createNewList = (payload) => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const user = JSON.parse(localStorage.getItem('user'));

    const newProjects = user.projects.map((project) => {
        if (project.id == payload.projects_id) {
            project.columns.push(payload);
        }
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return { ...auth, ...user };
}

const removeList = (payload) => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const user = JSON.parse(localStorage.getItem('user'));

    const newProjects = user.projects.map((project) => {
        if (project.id == payload.projectId) {
            project.columns = project.columns.filter(column => {
                console.log('column : ',column.id,payload.id,payload.laneId)
                if (column.id != payload.id ||column.id != payload.laneId ) {
                    return column;
                }
            });
        }
        return project;
    });
    user.projects = newProjects;
    console.log('newProjects : ',newProjects)
    localStorage.setItem("user", JSON.stringify(user));
    return { ...auth, ...user };
}


const updateList = (payload) => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const user = JSON.parse(localStorage.getItem('user'));
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
    return { ...auth, ...user };
}

export { createNewList, removeList, updateList }