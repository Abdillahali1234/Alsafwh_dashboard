import { IFile, IUser } from "./PublicInterfce";

export interface IStudent {
  Year: "FirstYear" | "SecondYear" | "ThirdYear";
  file: IFile | null;
  location: string;
  specialization: string;
  user: IUser;
  fatherPhone: string;
}
