import { EmailOV } from "../objectValues/email.ov";
import { LocationObjV } from "../objectValues/Location.ObjV";

export interface UserEntity {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: LocationObjV;
}
