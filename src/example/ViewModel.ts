import { IResults } from "../IResults";

export default class ViewModel {

  results: IResults;

  params = {
    name: "",
    age: "",
    email: ""
  };

  submit = () => {
    console.log(this.params);
  };
}
