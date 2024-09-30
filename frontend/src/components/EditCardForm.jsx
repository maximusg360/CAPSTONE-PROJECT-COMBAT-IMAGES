/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateCard } from "./card";
import axios from "axios";

const EditCardForm = ({ card }) => {
  const [name, setName] = useState(card?.name || "");
  const [description, setDescription] = useState(card?.description || "");
  const [imageUrl, setImageUrl] = useState(card?.image_url || "");
  const [weightClass, setWeightClass] = useState(card?.weight_class || "");
  const [eventName, setEventName] = useState(card?.event_name || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (card) {
      setName(card.name);
      setDescription(card.description);
      setImageUrl(card.image_url);
    }
  }, [card]);

  const handleEdit = async (e) => {
    e.preventDefault();
    // Update the card
    await axios.put(`http://localhost:8080/images/edit/${card.id}`, {
      name: name || card.name,
      description: description || card.description,
      image_url: imageUrl || card.image_url,
      weight_class: weightClass || card.weight_class,
      event_name: eventName || card.event_name,
    });
    window.location.reload();
    // Navigate back to the home page or a desired page after editing
  };

  return (
    <div className="w-full max-w-xs mx-auto mt-5 p-2 shadow-md rounded-md bg-gray-800 text-white">
      <form onSubmit={handleEdit}>
        <label className="block text-gray-400 text-sm font-bold mb-2">
          Edit Event Name:
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 my-2 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          placeholder="Enter Event Name"
          onChange={(e) => setEventName(e.target.value)}
          value={eventName}
        />
        <label className="block text-gray-400 text-sm font-bold mb-2">
          Edit Weight Class:
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 my-2 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          placeholder="Enter Weight Class"
          onChange={(e) => setWeightClass(e.target.value)}
          value={weightClass}
        />
        <label className="block text-gray-400 text-sm font-bold mb-2">
          Edit Name:
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 my-2 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          placeholder="Enter Event Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <label className="block text-gray-400 text-sm font-bold mb-2">
          Edit Image URL:
        </label>
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 my-2 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          placeholder="Enter Image URL"
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
        />

        <label className="block text-gray-400 text-sm font-bold mb-2">
          Edit Description:
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 my-2 leading-tight focus:outline-none focus:shadow-outline bg-gray-700 text-white"
          placeholder="Enter Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <h6 className="text-red-600 text-sm">No more than 100 words</h6>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCardForm;
