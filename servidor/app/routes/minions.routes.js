module.exports = (app) => {
    const minions = require('../controllers/minions.controller.js');

    // Create a new minion
    app.post('/minions', minions.create);

    // Retrieve all minions Leve
    app.get('/minionsL', minions.findAllLeves);

    // Retrieve all minions Grave
    app.get('/minionsG', minions.findAllGraves);

    // Retrieve a single minions with minionId
    app.get('/minionsG/:minionId', minions.findOneG);

    // Retrieve a single minions with minionId
    app.get('/minionsL/:minionId', minions.findOneL);

    // Update a minions with minionId
    app.put('/minions/:minionId', minions.update);

    // Delete a minions with minionId
    app.delete('/minions/:minionId', minions.delete);

}