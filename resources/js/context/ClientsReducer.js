const addClientsToProject = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    console.log(payload)
    const newProjects = user.projects.map((project) => {
        if (project.id == payload.projects_id) {
            if('clients' in payload){
                project.clients=[...project.clients, ...payload.clients];
                console.log(project.clients);
            }else{
                project.clients.push(payload);
            }
        }
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const storeClientsToProject = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        if (project.id == payload.projects_id) {
            project.clients=payload.clients;
        }
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const removeClientFromProject = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        if (project.id == payload.projects_id) {
            project.clients = project.clients.filter(column => {
                if (column.id != payload.clients_id ) {
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

export { addClientsToProject, storeClientsToProject, removeClientFromProject }