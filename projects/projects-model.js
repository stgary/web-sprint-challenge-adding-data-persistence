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

function getResourceById(id) {
    return db('resources').where({ id: id });
}

function getProjectById(id) {
    return db('projects').where({ id: id });
}

function getTaskById(id) {
    return db('tasks').where({ id: id });
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
                return getProjectById(id);
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
                return getResourceById(id);
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
                return getTaskById(id);
            })
    );
}
