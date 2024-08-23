export interface IUser {
  email: string;
  fileUploads: IFile;
  firstName: string;
  id: string;
  lastName: string;
  phone: string;
  gender: string;
}
export interface ILesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  courseId: string;
  dateAdding: string;
  contentPdf: string;
  evalution: number;
  containQuize: boolean;
  quize?: IExam;
}

export interface IProblem {
  id: string;
  name: string;
  description: string;
  email: string;
  phone: string;
  isReading:boolean;
}
export interface IExam {
  id: string;
  title: string;
  description: string;
  lessionID: string;
  quizeTime: number;
  isPubliched: boolean;
  numberQustion: number;
  qustions?: IQustion[];
}

export interface IQustion {
  id: string;
  text: string;
  point: number;
  typeQustion: string;
  quizeId: string;
  img?: IFile;
  answerDtos?: IAnswer[];
  fileUpload?: IFile;
}

export interface IAnswer {
  id: string;
  text: string;
  isCorrect: boolean;
  questionId: string;
}

export interface IFile {
  publicId: string;
  typeRecourse: number;
  url: string;
  name: string;
}

export interface IFeedBack {
  id: string;
  userId: string;
  text: string;
  isConfirmed: boolean;
  name: string;
  imgUrl: string;
  user:IUser
}

export interface IAddFeedBack {
  userId: string;
  text: string;
}

export interface IResetPassword {
  email: string;
  code: string;
  password: string;
  confirmPassword: string;
}

export interface IYear {
  name: string;
  id: string;
}
export interface ISubject {
  description: string;
  id: string;
  imgId: string;
  name: string;
  fileUploads: IFile;
  branch: string;
}
export interface ITeacher {
  user: IUser;
  description: string;
  yearsofExperience: string;
  id: number;
}

export interface ICourse {
  description: string;
  evalution: number;
  id: string;
  imgUrl: string;
  isFree: boolean;
  startDate: string;
  subject: ISubject | null;
  subjectId: string;
  teacherId: number;
  title: string;
  trailerVideo: string;
  year: IYear;
  teacher: ITeacher;
  learningOutcomes: string;
  createAt: string;
  branch: string;
}

export interface IAddCourseData {
  branch: string;
  yearId: string;
  Title: string;
  description: string;
  imgUrl: string;
  learningOutcomes: string;
  evalution: number;
  isFree: boolean;
  trailerVideo: string;
  subjectId: string;
  startDate: string;
  teacherId: number;
  price: number;
}
