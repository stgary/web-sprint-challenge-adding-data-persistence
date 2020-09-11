const express = require('express');

const db = require('./projects-model.js');

const router = express.Router();

router.get('/resource', (req, res) => {
    db.getResources()
        .then(resource => {
            res.json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get resource :(' });
        });
});
  
router.get('/projects', (req, res) => {
    db.getProjects()
        .then(project => {
            res.json(project);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to get project :(' });
        });
    });
  
router.get('/:id', (req, res) => {
    const { id } = req.params;

    db.getTask(id)
        .then(task => {
            if (task) {
                res.json(task);
            } else {
                res.status(404).json({ message: 'Could not find task with given id :(' })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Failed to get task :(' });
        });
  });
  
router.post('/resource', (req, res) => {
    const data = req.body;
    const name = data.name;

    if(name === undefined) {
        res.status(500).json({ message: 'You must provide a name for the resource!' });
    } else {
        db.addResource(data)
            .then(resource => {
                res.status(201).json(resource);
            })
            .catch (err => {
                res.status(500).json({ message: 'Failed to create new resource :(' });
            });
    }
});
  
router.post('/project', (req, res) => {
      const data = req.body;
      const name = data.name;

    if(name === undefined) {
        res.status(500).json({ message: 'You must provide a name for the project!' });
    } else {
        db.addProject(data)
            .then(project => {
                res.status(201).json(project);
            })
            .catch (err => {
                console.log(err);
                res.status(500).json({ message: 'Failed to create new project :(' });
            });
    }
});
  
router.post('/task', (req, res) => {
      const data = req.body;
      const description = data.description;

    if(description === undefined) {
        res.status(500).json({ message: 'You must provide a description for the task!' });
    } else {
        db.addTask(data)
            .then(task => {
                res.status(201).json(task);
            })
            .catch (err => {
                console.log(err);
                res.status(500).json({ message: 'Failed to create new task :(' });
            });
    }
});

module.exports = router;