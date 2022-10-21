import { LayoutType } from 'shared/constants/enums';

export interface LayoutSliceState {
  dialogLayer: number;
  pageTitle: string;
  activeNav: string;
  menuToggled: boolean;
  tablePageManager: {
    [key: string]: number;
  };
  tableDataPerPage: number;
  dialog?: DialogProps | null;
  dialog2?: DialogProps | null;
  layoutType?: LayoutType;
  counter?: number;
}

export interface AuthSliceState {
  accessToken: string;
  // instance: AxiosInstance | undefined;
}

export interface DialogProps {
  title: string;
  titleHeight?: number | string;
  children: React.ReactNode;
  center?: boolean;
  width: number | string;
  height: number | string;
  /**
   *  if confirmType is set then another dialog will
   *  be opened to show the confirmation when the
   *  original dialog is closed, the value will determine
   *  which type of confirmation dialog to open
   * */
  confirmType?: number;
}
