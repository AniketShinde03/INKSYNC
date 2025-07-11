import Card from "./Card";
import Modal from "./Modal";
import { useRef, useState, useEffect } from "react";

// Default sample notes
const getDefaultNotes = () => [
  {
    id: "1",
    title: "Welcome to Notes App",
    content:
      "This is your first note! You can drag these cards around, delete them, and create new ones. Click the Create button to add your own notes.",
    category: "Getting Started",
    categoryColor: "blue",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  },
  {
    id: "2",
    title: "Shopping List",
    content: "1. Milk\n2. Bread\n3. Eggs\n4. Butter\n5. Apples",
    category: "Personal",
    categoryColor: "green",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  },
];

function Foreground() {
  const ref = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem("notes-data");
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error("Error reading from localStorage:", error);
    }
    return getDefaultNotes();
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    try {
      localStorage.setItem("notes-data", JSON.stringify(data));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [data]);

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-4 overflow-auto"
    >
      {data.map((item) => (
        <Card
          key={item.id}
          data={item}
          reference={ref}
          onDelete={() => handleDelete(item.id)}
        />
      ))}

      {/* Create / Close Modal Button */}
      <button
        className="fixed text-2xl bottom-6 right-6 text-white font-semibold bg-amber-600 rounded-full p-4 shadow-lg hover:bg-amber-700 transition-colors z-10"
        onClick={() => setModalOpen((prev) => !prev)}
      >
        {modalOpen ? "✕" : "+"}
      </button>

      {/* Reset Button: Show only when no notes */}
      {data.length === 0 && (
        <button
          className="fixed text-sm bottom-6 left-6 text-white bg-red-600 rounded-full p-3 shadow-lg hover:bg-red-700 transition-colors z-10"
          onClick={() => {
            const confirmReset = window.confirm(
              "Reset default notes?"
            );
            if (confirmReset) {
              setData(getDefaultNotes());
            }
          }}
        >
          Reset
        </button>
      )}

      {/* Modal */}
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-[4]">
          <Modal setData={setData} closeModal={() => setModalOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default Foreground;
