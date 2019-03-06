import Vue from 'vue';
import Component from 'vue-class-component';
import { AutoWired } from './decorators';
import { ApiService } from './api.service';

@Component
export class TestComponent extends Vue {
    public name = 'I am test component';

    @AutoWired
    public apiService!: ApiService;

    get serviceName() {
        return this.apiService ? this.apiService.getName() : '';
    }

    public mounted() {
        console.log(this.apiService.getName());
    }

    public render() {
        return (<div>{this.name}
            <div>{this.serviceName} in TestComponent</div>
        </div>)
    }
}