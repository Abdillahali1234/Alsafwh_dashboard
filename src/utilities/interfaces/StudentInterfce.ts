import { IFile, IUser, IYear } from "./PublicInterfce";

export interface IStudent {
  id: number;
  year: IYear;
  file: IFile | null;
  location: string;
  specialization: string;
  user: IUser;
  fatherPhone: string;
  isConfirmedFromAdmin: boolean;
}
