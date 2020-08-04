import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderDayAvailabilityService from '@modules/appointments/services/ListProviderDayAvailabilityService';

export default class ProviderDayAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { provider_id } = request.params;
    const { month, year, day } = request.body;

    const listProviderDay = container.resolve(
      ListProviderDayAvailabilityService,
    );

    const availability = await listProviderDay.execute({
      day,
      month,
      provider_id,
      year,
    });

    return response.json(availability);
  }
}
