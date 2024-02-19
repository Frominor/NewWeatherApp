export interface InputProps {
  City: string;
  isFectingDadatas: boolean;
  SetIsFetchingDatas: (isFectingDadatas: boolean) => void;
  SetCity: (e: string) => void;
  makeRequest: (e: any) => void;
}
