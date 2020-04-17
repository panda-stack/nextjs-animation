import { createSlice } from "@reduxjs/toolkit";

const RightDivdata = [
  {title:'MCQ',
  metadata:"Optional metadata should be two to"
  },
  {title:'VIDEO',
  metadata:"Optional metadata should be two to"
  },
  // {title:'CODING QUESTION',
  // metadata:"Optional metadata should be two to"
  // },
  // {title:'CODING ANIMATION',
  // metadata:"Optional metadata should be two to"
  // },

]

export const slice = createSlice({
  name: "main",
  initialState: {
    MiddleDivData:false,
    MiddleDivType:false,
    RightDiv: RightDivdata,
  },
  reducers: {
    setStudentDetailMode: state  =>{
      state.studentDetailMode = false
    },
    setMiddleDivData: (state, action)  =>{
      state.MiddleDivData = action.payload
    },
    setMiddleDivType: (state, action)  =>{
      state.MiddleDivType = action.searchcase
    },
    setRightDiv: (state, action)  =>{
      state.RightDiv = [...state.RightDiv ,...action.payload]
    }


  }
});

export const selectMiddleDivData = state => state.main.MiddleDivData;
export const selectMiddleDivType = state => state.main.MiddleDivType;
export const selectRightDiv = state => state.main.RightDiv;


export const { setMiddleDivData,setMiddleDivType,setRightDiv, } = slice.actions;

export default slice.reducer;
