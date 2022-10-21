/**
 * Redux slice for managing layout-related info
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LayoutSliceState, DialogProps } from 'shared/interface/stateModel';
import { LayoutType, Navs } from 'shared/constants/enums';

// Initial State
const initialState: LayoutSliceState = {
  pageTitle: '',
  dialog: null,
  dialog2: null,
  dialogLayer: 0,
  activeNav: Navs.EXAMPLE_PAGE,
  menuToggled: false,
  tablePageManager: {
    table1: 1,
  },
  tableDataPerPage: 5,
  counter: 0,
};

// Reducers
export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    // change the global layout style
    setLayout: (
      state: LayoutSliceState,
      { payload }: PayloadAction<LayoutType>
    ) => {
      // console.log('layout payload:', payload);
      state.layoutType = payload;
    },
    setDialog: (
      state: LayoutSliceState,
      { payload }: PayloadAction<DialogProps | null>
    ) => {
      if (payload === null) {
        // meaning about to close dialog
        if (state.dialogLayer === 1) {
          // meaning dialog1 is open and about to close dialog1
          state.dialog = payload;
          state.dialogLayer = 0;
        } else if (state.dialogLayer === 2) {
          // meaning dialog2 is open and about to close dialog2
          state.dialog2 = payload;
          state.dialogLayer = 1;
        }
      } else {
        // meaning about to open dialog
        // eslint-disable-next-line no-lonely-if
        if (state.dialogLayer === 0) {
          // meaning no dialog is open and about to open dialog1
          state.dialog = payload;
          state.dialogLayer = 1;
        } else if (state.dialogLayer === 1) {
          // meaning dialog1 is open and about to open dialog2
          state.dialog2 = payload;
          state.dialogLayer = 2;
        }
      }
    },
    setActiveNav: (
      state: LayoutSliceState,
      { payload }: PayloadAction<string>
    ) => {
      state.activeNav = payload;
    },
    setMenuToggled: (
      state: LayoutSliceState,
      { payload }: PayloadAction<boolean>
    ) => {
      state.menuToggled = payload;
    },
    setTablePageManager: (
      state: LayoutSliceState,
      { payload }: PayloadAction<{ [key: string]: number }>
    ) => {
      state.tablePageManager = payload;
    },
    setCounter: (
      state: LayoutSliceState,
      { payload }: PayloadAction<number>
    ) => {
      state.counter = payload;
    },
  },
});

// Selectors
export const selectLayout = (state: {
  layout: {
    layoutType: LayoutType;
  };
}) => state.layout.layoutType;

export const selectDialog = (state: {
  layout: {
    dialog: DialogProps;
  };
}) => state.layout.dialog;

export const selectDialog2 = (state: {
  layout: {
    dialog2: DialogProps;
  };
}) => state.layout.dialog2;

export const selectActiveNav = (state: {
  layout: {
    activeNav: string;
  };
}) => state.layout.activeNav;

export const selectMenuToggled = (state: {
  layout: {
    menuToggled: boolean;
  };
}) => state.layout.menuToggled;

export const selectTablePageManager = (state: {
  layout: {
    tablePageManager: {
      [key: string]: number;
    };
  };
}) => state.layout.tablePageManager;

export const selectTableDataPerPage = (state: {
  layout: {
    tableDataPerPage: number;
  };
}) => state.layout.tableDataPerPage;

export const selectCounter = (state: {
  layout: {
    counter: number;
  };
}) => state.layout.counter;

export const {
  setLayout,
  setDialog,
  setActiveNav,
  setMenuToggled,
  setTablePageManager,
  setCounter,
} = layoutSlice.actions;

export default layoutSlice.reducer;
