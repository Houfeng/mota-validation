export default class ViewModel {

  params = {
    name: '',
    age: '',
    email: ''
  };

  submit = () => {
    console.log(this.params);
  }

}