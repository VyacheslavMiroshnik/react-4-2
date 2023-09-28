export type dateObject = {
  date: string;
  distance: string;
  dateObject: Date;
  id?: string;
};
export type stepProps = {
  addTrain: (a: FormType) => void;
};
export type listProps = {
  list: dateObject[];
  delTraining: (a: dateObject) => void;
};
export type FormType = {
  date: string;
  distance: string;
};
