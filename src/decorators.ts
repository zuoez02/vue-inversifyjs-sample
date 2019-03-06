import { container } from './container';

export const AutoWired: PropertyDecorator = (target: any, key) => {
    const ConstrutorName = Reflect.getMetadata('design:type', target, key);
    const Construtor = container.get(ConstrutorName) as new () => any;
    console.log(typeof Construtor);
    target[key] = Construtor;
};
