

const storeMeetings = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));

    const newProjects = user.projects.map((project) => {
        if (project.id == payload.projects_id) {
            project.meetings=[...project.meetings,...payload];
        }
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const createNewMeeting = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));

    const newProjects = user.projects.map((project) => {
        if (project.id == payload.projects_id) {
            project.meetings.push(payload);
        }
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const storeDetailMeeting = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    const newProjects = state.projects.map((project) => {
        if (project.id == payload.projects_id) {
            try {
                project.meetings.map(function(meeting){
                    if(meeting.id==payload.id) return payload;
                    return meeting;
                });
            } catch (error) {
                console.log(error)
                console.log('context storeDetailMeeting : ',project,payload,user.projects);

            }
        }
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const removeMeeting = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));

    const newProjects = user.projects.map((project) => {
        if (project.id == payload.projects_id) {
            project.meetings = project.meetings.filter(meeting => {
                if (meeting.id != payload.id) {
                    return meeting;
                }
            });
            return project;
        }
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}


const updateMeeting = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        if (project.id == payload.projects_id) {
            project.meetings = project.meetings.map((meeting) => {
                if (meeting.id == payload.id) {
                    meeting = payload;
                }
                return meeting;
            })
        }
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

export { storeMeetings,createNewMeeting, storeDetailMeeting, removeMeeting, updateMeeting }