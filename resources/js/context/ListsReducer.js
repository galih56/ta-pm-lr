const average = arr => {
    var result=0;
    if(typeof arr !== 'undefined'){
        var avg=arr.reduce((sum,data) => {
            return sum + data.progress
        }, 0) / arr.length
        result=avg
    }
    return result;
};

const createNewList = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        if (project.id == payload.projects_id) {
            project.columns.push(payload);
            project.progress=average(project.columns);
        }
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const removeList = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        if (project.id == payload.projects_id) {
            project.columns = project.columns.filter(column => {
                if (column.id != payload.id ) {
                    return column;
                }
            });
            project.progress=average(project.columns);
        }
        project.progress=average(project.columns)
        return project
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
            project.progress=average(project.columns);
        }
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

export { createNewList, removeList, updateList }