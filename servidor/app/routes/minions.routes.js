module.exports = (app) => {
    const minions = require('../controllers/minions.controller.js');

    // Create a new minion
    app.post('/minions', minions.create);

    // Retrieve all minions Leve
    app.get('/minionsL', minions.findAllLeves);

    // Retrieve all minions Grave
    app.get('/minionsG', minions.findAllGraves);

    // Retrieve a single minions with minionId
    app.get('/minions/:minionId', minions.findOne);

    // Update a minions with minionId
    app.put('/minions/:minionsId', minions.update);

    // Delete a minions with minionId
    app.delete('/minions/:minionsId', minions.delete);
}