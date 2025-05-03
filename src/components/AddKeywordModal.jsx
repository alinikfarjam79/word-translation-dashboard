"use client";

import { useState, useContext } from "react";
import TranslationContext from "@/context/TranslationContext";

const AddKeywordModal = ({ isOpen, onClose }) => {
  const { addKeyword } = useContext(TranslationContext);
  const [newKeyword, setNewKeyword] = useState("");

  const handleSubmit = () => {
    if (newKeyword.trim()) {
      addKeyword(newKeyword.trim());
      setNewKeyword("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Add New Keyword</h2>
        <input
          type="text"
          className="w-full p-2 border rounded mb-4"
          value={newKeyword}
          onChange={(e) => setNewKeyword(e.target.value)}
          placeholder="Enter keyword"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4  py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddKeywordModal;
