
const storeDetailTask = (payload) => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        project.columns = project.columns.map(column => {
            column.cards = column.cards.map((card) => {
                if (card.id == payload.id) {
                    card = payload;
                }
                return card
            });
            return column;
        });
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return { ...auth, ...user };
}

const storeDetailSubtask = (payload) => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        project.columns = project.columns.map(column => {
            column.cards = column.cards.map((card) => {
                if (card.id == payload.parentTask) {
                    card.cards=card.cards.map((subtask)=>{
                        if(subtask.id=payload.id) return payload
                        return subtask;
                    })
                }
                return card
            });
            return column;
        });
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return { ...auth, ...user };
}

const storeSubtasks = (payload) => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        if (project.id == payload.projectId) {
            project.columns = project.columns.map(column => {
                if (column.id == payload.listId) {
                    column.cards = column.cards.map((card) => {
                        if (card.id == payload.parentTask)
                            card.cards = payload;
                        return card;
                    })
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

const createNewTask = (payload) => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(payload)
    const newProjects = user.projects.map((project) => {
        project.columns = project.columns.map(column => {
            if(column.id==payload.listId ||column.id==payload.laneId){ 
                column.cards.push(payload);
            }
            return column;
        })
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return { ...auth, ...user };
}

const removeTask = (payload) => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const user = JSON.parse(localStorage.getItem('user'));

    console.log('removing-task',payload);
    const newProjects = user.projects.map((project) => {
        project.columns = project.columns.map(column => {
                column.cards = column.cards.filter(card => {
                    if (card.id != payload.id) {
                        return card
                    }
                });
            return column;
        });
        return project;
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return { ...auth, ...user };
}

const createNewSubtask = (payload) => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const user = JSON.parse(localStorage.getItem('user'));

    const newProjects = user.projects.map((project) => {
        project.columns = project.columns.map((column) => {
            column.cards = column.cards.map((card) => {
                if (card.id == payload.parentTask) {
                    card.cards.push(payload);
                }
                return card;
            });
            return column;
        })
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return { ...auth, ...user };
}

const removeSubtask = (payload) => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const user = JSON.parse(localStorage.getItem('user'));

    const newProjects = user.projects.map((project) => {
        project.columns = project.columns.map((column) => {
            column.cards = column.cards.map((card) => {
                console.log('removesubtask : ',card);
                if('cards'in card){
                    card.cards = card.cards.filter((item) => {
                        if (item.id != payload)  return  item;
                    });
                }
                return card;
            });
            return column;
        })
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return { ...auth, ...user };
}
const createNewAttachments = (payload) => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const user = JSON.parse(localStorage.getItem('user'));
    
    const newProjects = user.projects.map((project) => {
        project.columns = project.columns.map(column => {
            column.cards = column.cards.map((card) => {
                if (card.id == payload.taskId) {
                    if('attachments' in card){
                        const newArr = [...card.attachments, ...payload.data];
                        card.attachments = newArr;
                    }else{
                        card.attachments = payload.data;
                    }
                }
                return card
            });
            return column;
        })
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return { ...auth, ...user };
}

const removeAttachment = (payload) => {
    const auth = JSON.parse(localStorage.getItem('auth'));
    const user = JSON.parse(localStorage.getItem('user'));

    const newProjects = user.projects.map((project) => {
        project.columns = project.columns.map((column) => {
            column.cards = column.cards.map((card) => {
                if (card.id == payload.taskId) {
                    card.attachments = card.attachments.filter((item) => {
                        if (item.id != payload.id) return item;
                    });
                }
                return card;
            });
            return column;
        })
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return { ...auth, ...user };
}

export {
    storeDetailTask, storeDetailSubtask, storeSubtasks, 
    createNewTask, removeTask,
    createNewSubtask, removeSubtask,
    createNewAttachments, removeAttachment
}