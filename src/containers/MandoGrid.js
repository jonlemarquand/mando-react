import React from 'react';
import { isBrowser, isMobile } from "react-device-detect";

import NoteCircle from '../components/NoteCircle';

import AllStrings from '../data/AllStrings';
import FilterData from '../data/FilterData';



const MandoGrid = ({ rootNote, mode, display, chordVariation, scaleVariation}) => {

    // 1. Select Options
    // 2. Filter Data Based on Options
    // 3. Render Grid
    // 4. Render NoteCircles

    let Strings = [];
    let FilteredStrings = [];
    const getMandoInfo = () => {

        if (mode === 'chords') {

        } else if (mode === 'scales') {
            AllStrings.forEach(string => {
                if (FilterData[rootNote]["scales"][scaleVariation].some(i => i === string.noteName.toLowerCase())) {
                    FilteredStrings.push(string);
                }
            })
            Strings = FilteredStrings;
        } else if (mode ==='arpeggios') {
            AllStrings.forEach(string => {
                if (FilterData[rootNote]["arpeggios"][chordVariation].some(i => i === string.noteName.toLowerCase())) {
                    FilteredStrings.push(string);
                }
            });
            console.log(FilteredStrings);
            Strings = FilteredStrings;
        } else {
            Strings = AllStrings;
        }
    }
    getMandoInfo();
    //console.log(FilterData);

    const StringsView = Strings.map((string) => {
        if (isMobile) {
            if (string.tab === "0" && string.noteName.toLowerCase() === rootNote && (mode === 'scales' || mode === 'arpeggios')) {
                return (<div className={`tab tab${string.tab} string${string.string} no-border`}>
                <NoteCircle noteName={string.noteName} extraClass="root-circle"/>
            </div>) 
            } else if (string.tab === "0") {
            return (<div className={`tab tab${string.tab} string${string.string} no-border`}>
                <NoteCircle noteName={string.noteName}/>
            </div>)
            } else if (string.noteName.toLowerCase() === rootNote && (mode === 'scales' || mode === 'arpeggios')) {
                return (<div className={`tab tab${string.tab} string${string.string}`}>
                <NoteCircle noteName={string.noteName} extraClass="root-circle"/>
            </div>)
            } else if (string.tab < 13){
            return (<div className={`tab tab${string.tab} string${string.string}`}>
                <NoteCircle noteName={string.noteName}/>
            </div>)   
            }
        } else if (string.tab === "0" && string.noteName.toLowerCase() === rootNote && (mode === 'scales' || mode === 'arpeggios')) {
            return (<div className={`tab tab${string.tab} string${string.string} no-border`}>
            <NoteCircle noteName={string.noteName} extraClass="root-circle"/>
        </div>) 
        } else if (string.tab === "0") {
        return (<div className={`tab tab${string.tab} string${string.string} no-border`}>
            <NoteCircle noteName={string.noteName}/>
        </div>)
        } else if (string.noteName.toLowerCase() === rootNote && (mode === 'scales' || mode === 'arpeggios')) {
            return (
                <div className={`tab tab${string.tab} string${string.string}`}>
                    <NoteCircle noteName={string.noteName} extraClass="root-circle"/>
                </div>
            )
        } else {
            return (
                <div className={`tab tab${string.tab} string${string.string}`}>
                    <NoteCircle noteName={string.noteName}/>
                </div>
            )   
        }
    })

    const gridStrings = []
    // [ {1,1}, {1,2}

    for (let i = 1; i < 5; i++) {
        if(isBrowser) {
            for (let j = 1; j < 25; j++) {
                gridStrings.push(
                <div className={`tab tab${j} string${i}`}>
                </div>
                )
            }
        }
        if (isMobile) {
            for (let j = 1; j < 13; j++) {
                gridStrings.push(
                <div className={`tab tab${j} string${i}`}>
                </div>
                )
            }
        }
    }
    let markers = ["0", 3, 5, 7, 10, 12, 15, 17, 20, 22, 24]
    if (isMobile) {
        markers = ["0", 3, 5, 7, 10, 12]
    }
    const gridMarkers = markers.map(marker =>
      <div className={`no-border tab tab${marker} marker`}>{marker}</div>
    )
    return (
      <div className="mando-tabs">
        { gridMarkers }
        { gridStrings }
        { StringsView }
      </div>
    )
}

export default MandoGrid;