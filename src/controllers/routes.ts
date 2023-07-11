import express from 'express';

import usersControllers from './user.controller';

function routerApi(app: express.Application){
  app.use('/users', usersControllers);
}

export { routerApi };