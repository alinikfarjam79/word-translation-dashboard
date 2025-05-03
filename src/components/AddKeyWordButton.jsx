"use client";

import { useState } from "react";
import AddKeywordModal from "./AddKeywordModal";

const AddKeywordButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        + Add Keyword
      </button>
      <AddKeywordModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default AddKeywordButton;
