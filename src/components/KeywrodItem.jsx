"use client";
import { Draggable } from "@hello-pangea/dnd";
import { useContext } from "react";
import TranslationContext from "@/context/TranslationContext";

const KeywordItem = ({ keyword, index }) => {
  const { language, updateTranslation } = useContext(TranslationContext);
  return (
    <Draggable draggableId={keyword.id} index={index} key={keyword.id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          className="flex items-center mb-2 p-2 bg-white rounded shadow cursor-grab"
        >
          <span className="drag-handle text-gray-500">⋮⋮</span>
          <span className="flex-1 ml-2">{keyword.keyword}</span>
          <input
            className={`p-1 border-none outline-none rounded w-32 ml-2  text-center ${
              keyword.translations[language] ? "bg-gray-400/20" : "bg-red-400"
            } ${
              keyword.translations[language] ? "text-gray-500" : "text-white"
            } `}
            value={keyword.translations[language] || ""}
            onChange={(e) =>
              updateTranslation(keyword.id, language, e.target.value)
            }
            placeholder={keyword.translations[language] ? "" : "...."}
          />
        </div>
      )}
    </Draggable>
  );
};

export default KeywordItem;
