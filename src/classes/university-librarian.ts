import * as Interfaces from '../interfaces';
import { sealed, logger, writable, logParameter, logMethod, format } from "../decorators";

//@sealed('UniversityLibrarian')
@logger
export default class UniversityLibrarian implements Interfaces.Librarian {
    department: string = 'Department';

    @format()
    name: string = 'Name';
    email: string = 'qwerty@mail.com';

    @logMethod
    public assistCustomer(@logParameter custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }

    printLibrarian = () => {};

    @writable(true)
    public assistFaculty() {
        console.log(`Assisting faculty`);
    }

    @writable(false)
    public teachCommunity() {
        console.log(`Teaching community`);
    }
}