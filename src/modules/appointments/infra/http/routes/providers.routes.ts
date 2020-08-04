import { Router } from 'express';

import ProvidersController from '@modules/appointments/infra/http/controllers/ProvidersController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providersMonthController = new ProviderMonthAvailabilityController();
const providersDayController = new ProviderDayAvailabilityController();


providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);
providersRouter.get('/:provider_id/month-availability', providersMonthController.index);
providersRouter.get('/:provider_id/day-availability', providersDayController.index);

export default providersRouter;
