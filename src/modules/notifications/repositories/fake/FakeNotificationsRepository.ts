import { ObjectID } from 'mongodb';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import Notification from '../../infra/typeorm/schemas/Notification';
import ICreateNotiticationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

class NotificationsRepository implements INotificationsRepository {
  private notifications: Notification[] = [];

  public async create({
    content,
    recipient_id
  }: ICreateNotiticationDTO): Promise<Notification> {
    const notification = new Notification();

    Object.assign(notification, {id: new ObjectID(), content, recipient_id});

    this.notifications.push(notification);

    return notification;
  }
}

export default NotificationsRepository;
