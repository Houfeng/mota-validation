import { IResults } from "../IResults";
export default class ViewModel {
    results: IResults;
    params: {
        name: string;
        age: string;
        email: string;
    };
    submit: () => void;
    required(value: any, model: any): boolean;
}
