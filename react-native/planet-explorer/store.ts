import { createSlice, createStore, PayloadAction } from "@reduxjs/toolkit";
import { PlanetLog } from "./models";

export interface PlanetLogState{
    planetLogs:PlanetLog[]
}

const initialState:PlanetLogState ={
    planetLogs: [
        {id:"101", planet:"Tuchanka", desc:"Krogan Homeworld. Radioactive wasteland", isInhabited:true},
        {id:"202", planet:"Thessia", desc:"Asari Homeworld. Very blue", isInhabited:true},
        {id:"303", planet:"klendagon", desc:"Uninabitated plaent I vauguely remember", isInhabited:false}
    ]
}

const planetSlice = createSlice({
    name:"PlanetSlice",
    initialState,
    reducers:{
        addPlanetLog(state, action:PayloadAction<PlanetLog>){
            state.planetLogs.push(action.payload)
        }
    }
});

export const planetStore = createStore(planetSlice.reducer)