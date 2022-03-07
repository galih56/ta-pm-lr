const average = (arr,subtasks=false) => {
    var result=0                
    if(Array.isArray(arr) && arr?.length > 0){
        if(subtasks){
            var value_per_task=100/arr.length;
            var complete_subtask_counter=0;
            arr.forEach(item=>{
                if(item.complete){ 
                    complete_subtask_counter++; 
                }
            })
            var progress=complete_subtask_counter*value_per_task;
            result=progress;
        }else{
            var avg=arr.reduce((sum,data) => {
                return sum + data.progress
            }, 0) / arr.length
            result=avg
        }
    }
    return result;
};

const storeDetailTask = (payload) => {
    console.log(payload);
    var user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        if(project.id==payload?.list?.project?.id || project.id==payload?.parent_task?.list?.project?.id){   
            project.columns = project.columns.map(column => {
                if(column.id==payload?.list?.id || column.id==payload?.parent_task?.list?.id){
                    column.cards = column.cards.map((card) => {
                        if (card.id == payload.id) {
                            card = payload;
                        } 
                        card.progress=average(card.cards,true);
                        return card
                    });
                    column.progress=average(column.cards)
                }
                return column;
            });
            project.progress=average(project.columns)
        }
        return project
    });
    user.projects = newProjects;
    localStorage.setItem("user", JSON.stringify(user));
    return user;
}

const storeDetailSubtask = (payload) => {
    console.log(payload);
    var user = JSON.parse(localStorage.getItem('user'));
    const newProjects = user.projects.map((project) => {
        if(project.id==payload?.list?.project?.id || project.id==payload?.parent_task?.list?.project?.id){
            project.columns = project.columns.map(column => {
                if(column.id==payload?.list?.id || column.id==payload?.parent_task?.list?.id){
                    column.cards = column.cards.map((card) => {
                        if (card.id == payload.parent_task_id) {
                            card.cards=card.cards.map((subtask)=>{
                                if(subtask.id==payload.id){ return payload}
                                return subtask;
                            })
                        }
                        card.progress=average(card.cards,true)
                        return card
                    });
                    column.progress=average(column.cards)
                }
                return column;
            });
            project.progress=average(project.columns)
        }
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
                        if (card.id == payload.parent_task_id){
                            card.cards = payload;
                            card.progress=average(card.cards,true)    
                            return card
                        }
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
                card.progress=average(card.cards,true)
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
                card.progress=average(card.cards,true)
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





