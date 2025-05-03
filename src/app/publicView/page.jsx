"use client";

import LanguageSelector from "@/components/LanguageSelector";
import TranslationContext from "@/context/TranslationContext";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useContext } from "react";

const PublicView = () => {
  const { keywords, language, onDragEnd } = useContext(TranslationContext);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-2xl font-bold text-gray-800">
            Word Translations
          </h1>
          <LanguageSelector className="mt-2" />
        </div>
        <div className="h-[540px] w-full overflow-auto flex flex-col justify-center items-center">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  className="w-[90%]"
                  ref={provided.innerRef}
                >
                  {keywords.map((keyword, index) => (
                    <Draggable
                      draggableId={keyword.id}
                      index={index}
                      key={keyword.id}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          className="flex items-start   flex-col mb-2 p-4 bg-white rounded shadow cursor-grab"
                        >
                          <span className="flex-1 ">{keyword.keyword}</span>
                          <div>
                            {keyword.translations[language]
                              ? keyword.translations[language]
                              : "No translation yet"}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};
{
  /* <div className="divide-y divide-gray-200">
  {keywords.map((kw) => (
    
  ))}
</div>; */
}

export default PublicView;
