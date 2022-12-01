import{Country} from './country.model'
import{Contact} from './contact.model'
export class User
{
     Country!: Country ;
     Institution!:string;
    EventReservation !:string;
    EventType!:number;
    Contact!: Contact ;
    Language!:string;
    Comments !:string;
}