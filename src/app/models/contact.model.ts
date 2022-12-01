import { CommunicationInfo } from './communicationInfo.model';
import { Adress } from './adress.model';
import { Gender } from './gender.model';
export class Contact
    {
          FirstName !:string;
          LastName!:string;
          FullName !:string;
          IdNumber !:string;
           Gender !:Gender ;
          ComInfo !:CommunicationInfo;

          Language!:string;
          Adress!: Adress ;
          State !:string;

          Id !:string;
          IsDeleted !:boolean;
          
            IsDirty !:boolean;
        IsCanceled !:boolean;
         IsActive !:boolean;
         CreatedOn !:boolean;
    }