/**
 * Created by eeaaou on 27.11.2016.
 */
class deneme {
    value : string;
    onLog (value:string) {
        return this.value +" "+value;
    }

    constructor(public message:string) {
        console.log(this.message);
    }
}