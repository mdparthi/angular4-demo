import {User} from '../model/user';

export const USER_DATA : User[] = [
        {
   
                firstName : "Bill",
                lastName : "Gates",
                dob : new Date("Jan 12, 1964"),
                income : 100000,
                isWorking : true,
                company : "Microsoft",
                image : 'assets/images/billgates.jpg',
                votes : 11
      
        },
        
        {
   
                firstName : "Bill",
                lastName : "Beck",
                dob : new Date("Jan 12, 1970"),
                income : 10000,
                isWorking : true,
                company : "Microsoft",
                image : 'assets/images/billgates.jpg',
                votes : 11
      
        },
        {
   
                firstName : "Bill",
                lastName : "Deck",
                dob : new Date("Jan 12, 1960"),
                income : 0,
                isWorking : false,
                company : "Microsoft",
                image : 'assets/images/billgates.jpg',
                votes : 11
      
        }
]