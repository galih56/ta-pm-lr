const average = arr => {
    if(typeof arr=='array'){
        var avg=arr.reduce((sum,data) => {
            return sum + data.progress
        }, 0) / arr.length
        return avg;
    }
    return 0;
};

const storeDetailTask = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        project.columns = project.columns.map(column => {
            column.cards = column.cards.map((card) => {
                if (card.id == payload.id) {
                    card = payload;
                } 
                card.progress=average(card.cards)
                // console.log(card,average(card.cards));
                return card
            });
            column.progress=average(column.cards)
            // console.log(column,average(column.cards));
            return column;
        });
        project.progress=average(project.columns)
        // console.log(project,average(project.columns));
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const storeDetailSubtask = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        project.columns = project.columns.map(column => {
            column.cards = column.cards.map((card) => {
                if (card.id == payload.parent_task_id) {
                    card.cards=card.cards.map((subtask)=>{
                        if(subtask.parent_task){
                            card.progress=subtask.parent_task.progress;
                        }
                        if(subtask.id==payload.id){ return payload}
                        return subtask;
                    })
                }
                card.progress=average(card.cards)
                return card
            });
            column.progress=average(column.cards)
            return column;
        });
        project.progress=average(project.columns)
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const storeSubtasks = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        if (project.id == payload.projects_id) {
            project.columns = project.columns.map(column => {
                if (column.id == payload.lists_id) {
                    column.cards = column.cards.map((card) => {
                        if (card.id == payload.parent_task_id)
                            card.cards = payload;
                            card.progress=average(card.cards)
                            return card
                    })
                }
                column.progress=average(column.cards)
                return column;
            })
        }
        project.progress=average(project.columns)
        return project
    });
    
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const createNewTask = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        project.columns = project.columns.map(column => {
            if(column.id==payload.lists_id ||column.id==payload.laneId){ 
                column.cards.push(payload);
            }
            return column;
        })
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const removeTask = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        project.columns = project.columns.map(column => {
            column.cards = column.cards.filter(card => {
                if (card.id != payload.id) {
                    return card
                }
            });
            column.progress=average(column.cards)
            return column;
        });
        project.progress=average(project.columns)
        return project
    });
    
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const createNewSubtask = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));

    const newProjects = user.projects.map((project) => {
        project.columns = project.columns.map((column) => {
            column.cards = column.cards.map((card) => {
                if (card.id == payload.parent_task_id) {
                    card.cards.push(payload);
                }
                card.progress=average(card.cards)
                return card
            });
            column.progress=average(column.cards)
            return column;
        })
        project.progress=average(project.columns)
        return project
    });
    
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const removeSubtask = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));

    const newProjects = user.projects.map((project) => {
        project.columns = project.columns.map((column) => {
            column.cards = column.cards.map((card) => {
                if(card.id==payload.parent_task_id && 'cards'in card){
                    card.cards = card.cards.filter((item) => {
                        if (item.id != payload.id)  return  item;
                    });
                }
                card.progress=average(card.cards)
                return card
            });
            column.progress=average(column.cards)
            return column;
        })
        project.progress=average(project.columns)
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}
const createNewAttachments = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));
    
    const newProjects = user.projects.map((project) => {
        project.columns = project.columns.map(column => {
            column.cards = column.cards.map((card) => {
                if (card.id == payload.tasks_id) {
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
    return user;
}

const removeAttachment = (payload) => {
    var user = JSON.parse(localStorage.getItem('user'));

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
    return user;
}

export {
    storeDetailTask, storeDetailSubtask, storeSubtasks, 
    createNewTask, removeTask,
    createNewSubtask, removeSubtask,
    createNewAttachments, removeAttachment
}