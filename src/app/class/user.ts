export class User {

    #user_name: string;
    #password:string;
    #email:string;
    #marital_satus:string;
    #gender:string;
    #information:string;
    #role:string;

   
    constructor(
        user_name: string,
        password:string,
        email:string,
        marital_satus:string,
        gender:string,
        information:string,
        role:string,
    ){
       this.#user_name = user_name;
       this.#password = password;
       this.#email = email;
       this.#marital_satus = marital_satus;
       this.#gender = gender;
       this.#information = information;
       this.#role = role;
       
    }

    get user_name(): string {
        return this.#user_name;
    }
    get password(): string {
        return this.#password;
    }
    get email(): string {
        return this.#email;
    }
    get marital_satus(): string {
        return this.#marital_satus;
    }
    get gender(): string {
        return this.#gender;
    }
    get information(): string {
        return this.#information;
    }
    get role(): string {
        return this.#role;
    }
    
    set user_name(value: string) {
        if (value == '') {
            throw new Error('');
        }
        this.#user_name = value;
    }
    set password(value: string) {
        if (value == '') {
            throw new Error('');
        }
        this.#password = value;
    }
    set email(value: string) {
        if (value == '') {
            throw new Error('');
        }
        this.#email = value;
    }
    set marital_satus(value: string) {
        if (value == '') {
            throw new Error('');
        }
        this.#marital_satus = value;
    }
    set gender(value: string) {
        if (value == '') {
            throw new Error('');
        }
        this.#gender = value;
    }
    set information(value: string) {
        if (value == '') {
            throw new Error('');
        }
        this.#information = value;
    }
    set role(value: string) {
        if (value == '') {
            throw new Error('');
        }
        this.#role = value;
    }



    

}
