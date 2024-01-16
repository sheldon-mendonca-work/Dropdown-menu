class Chips{
    id: string;
    image: string;
    name: string;
    email: string;

    constructor( _id: string, _image: string, _name:string, _email: string){
        this.id = _id;
        this.image = _image;
        this.name = _name;
        this.email = _email;
    }
}

export default Chips;