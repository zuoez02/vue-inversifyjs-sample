import { Container } from 'inversify';
import { ApiService } from './api.service';

const container = new Container({
    defaultScope: 'Singleton',
});

container.bind(ApiService).toSelf();

export { container };
