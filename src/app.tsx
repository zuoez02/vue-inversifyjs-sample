import Vue from 'vue';
import Component from 'vue-class-component';
import { ApiService } from './api.service';
import { AutoWired } from './decorators';
import { TestComponent } from './test-component';

@Component({
    components: {
        TestComponent,
    },
})
export class App extends Vue {
    public name = 'I am App';

    get serviceName() {
        return this.apiService ? this.apiService.getName() : '';
    }

    @AutoWired
    public apiService!: ApiService;

    public beforeCreate() {
        console.log(this.apiService);
    }

    public created() {
        console.log(this.apiService);
    }

    public mounted() {
        console.log(this.apiService.getName());
        setTimeout(() => {
            this.apiService.setName('I am new api service');
        }, 2000);
    }

    public render() {
        return (<div>{this.name}
            <div> {this.serviceName} in App</div>
            <TestComponent></TestComponent>
        </div>)
    }
}
