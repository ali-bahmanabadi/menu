import React from 'react';
import {
    Provider as DndProvider,
    Draggable,
    Droppable,
} from 'react-nested-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import style from './style.module.scss';
import { useOnDrop, appContext } from '../utils';
import { DroppableLists } from '../DroppebleLists';

export const RootContainer = () => {
    const { appState, onDrop } = useOnDrop();

    return (
        <appContext.Provider value={appState}>
            <DndProvider onDrop={onDrop} HTML5Backend={HTML5Backend}>
                <Droppable id={'workspace'} accept={['container']}>
                    {(wsProvided, wsSnapshot, wsPlacholder) => (
                        <div {...wsProvided} className={style.wrapper}>
                            {appState.workspace.containersOrder
                                .map((cId) => appState.containers[cId])
                                .map((ctnr, index) => (
                                    <Draggable
                                        horizontal
                                        key={ctnr.id}
                                        id={ctnr.id}
                                        index={index}
                                        type="container"
                                        droppableId="workspace"
                                    >
                                        {(horizProvided, horizSnapshot) => (
                                            <div
                                                {...horizProvided}
                                                className={`${
                                                    style.workspaceItem
                                                }${
                                                    horizSnapshot.isDragging
                                                        ? ' ' + style.hidden
                                                        : ''
                                                }`}
                                            >
                                                <DroppableLists
                                                    container={ctnr}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            {/* {wsPlacholder} */}
                        </div>
                    )}
                </Droppable>
            </DndProvider>
        </appContext.Provider>
    );
};
