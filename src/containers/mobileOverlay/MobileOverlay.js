import React, { useState } from 'react';

import Choices from '../Choices';
import MandoGrid from '../MandoGrid';
import Modal from '../../components/modal/Modal';
import OptionsButton from '../../components/OptionsButtons';
import OverallSort from '../OverallSort';

const MobileOverlay = ({ rootNote, chordVariation, scaleVariation, mode, display, handleDisplayChange, handleModeChange, handleRootNoteChange, handleChordVariationChange, handleScaleVariationChange }) => {

    const [showWorkModal, setShowWorkModal] = useState(false);

    const openWorkModalHandler = () => setShowWorkModal(true);

    const closeWorkModalHandler = () => setShowWorkModal(false);

    return (
        <>
            <Modal show={showWorkModal} onCancel={closeWorkModalHandler} contentClass="place-item__modal-content" footerClass="place-item__modal-actions">
                <OverallSort 
                    display={display} 
                    mode={mode} 
                    handleDisplayChange={handleDisplayChange} 
                    handleModeChange={handleModeChange}
                />
                <Choices 
                    rootNote={rootNote} 
                    chordVariation={chordVariation} 
                    scaleVariation={scaleVariation} 
                    handleRootNoteChange={handleRootNoteChange} 
                    handleChordVariationChange={handleChordVariationChange} 
                    handleScaleVariationChange={handleScaleVariationChange} 
                    mode={mode}
                />
            </Modal>
            <MandoGrid 
                rootNote={rootNote} 
                chordVariation={chordVariation} 
                scaleVariation={scaleVariation}
                mode={mode}
                display={display}
            />
            <OptionsButton onClick={openWorkModalHandler}/>
        </>
    )
}

export default MobileOverlay;