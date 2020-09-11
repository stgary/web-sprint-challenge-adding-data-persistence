const db = require("../data/dbConfig.js");

module.exports = {
    addResource,
    getResources,
    addProject,
    getProjects,
    addTask,
    getTask
};

function getResources() {
    return db('resources');
}

function getProjects() {
    return db('projects');
}

function getTask(project_id) {
    return (
        db('tasks')
            .join('projects', 'projects.id', '=', 'tasks.project_id')
            .select('tasks.id', 'projects.name', 'projects.description')
            .where({ project_id: project_id})
    );
}       

function addProject(data) {
    return (
        db('projects')
            .insert(data)
            .returning("id")
            .then(ids => {
                const id = ids[0];
                return id;
            })
    );
}

function addResource(data) {
    return (
        db('resources')
            .insert(data)
            .returning("id")
            .then(ids => {
                const id = ids[0];
                return id;
            })
    );
}

function addTask(data) {
    return (
        db('tasks')
            .insert(data)
            .returning("id")
            .then(ids => {
                const id = ids[0];
                return id;
            })
    );
}
