export class User {

    #user_name: String;
    #password:String;
    email:String;
    marital_satus:String;
    gender:String;
    information:String;
    role:String;

   
    constructor(
        user_name: String,
        password:String,
        email:String,
        marital_satus:String,
        gender:String,
        information:String,
        role:String,
    ){
       this.#user_name = user_name;
       this.#password = password;
       this.email = email;
       this.marital_satus = marital_satus;
       this.gender = gender;
       this.information = information;
       this.role = role;
       
    }

    get user_name(): string {
        return this.user_name;
    }
    set user_name(value: string) {
        if (value == '') {
            throw new Error('');
        }
        this.user_name = value;
    }



    

}
