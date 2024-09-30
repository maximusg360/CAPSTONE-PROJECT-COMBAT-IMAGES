/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import EditCardForm from "./EditCardForm";
import { deleteCard } from "./card";

const SingleImagesView = () => {
  const [card, setCard] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCard() {
      const item = await axios.get(
        `http://localhost:8080/images/getImage/${id}`
      );
      setCard(item.data);
    }
    fetchCard();
  }, [id]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:8080/images/delete/${id}`);
    navigate("/Gallery");
  };

  const ConfirmDialog = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-600">
            Are you sure you want to delete this card?
          </p>
          <div className="mt-4 space-x-2 flex justify-center">
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-200"
            >
              Confirm
            </button>
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  const EditDialog = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition duration-200"
            >
              Close
            </button>
            <button
              onClick={() => setIsConfirmOpen(true)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition duration-200"
            >
              Delete
            </button>
          </div>
          {/* Card edit form */}
          <EditCardForm card={card} />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {isEditing && <EditDialog />}
      {isConfirmOpen && (
        <ConfirmDialog
          isOpen={isConfirmOpen}
          onConfirm={handleDelete}
          onCancel={() => setIsConfirmOpen(false)}
        />
      )}

      {Object.keys(card).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <Link to="/Gallery">
            <div className="m-4 w-64 rounded overflow-hidden shadow-lg bg-white border-2 border-gray-300 p-4">
              <h1 className="font-bold text-xl mb-2 text-center">
                {card.name}
              </h1>
              <img
                src={card.image_url}
                alt={card.name}
                className="w-full h-48 object-cover mb-4"
              />
              <p className="text-gray-700 text-base">{card.description}</p>
            </div>
          </Link>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default SingleImagesView;
