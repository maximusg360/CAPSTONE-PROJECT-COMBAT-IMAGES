/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCard, updateCard } from "./card";

const CreateCardForm = ({ card }) => {
  const [cardName, setCardName] = useState("");
  const [cardEffect, setCardEffect] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (card) {
      console.log("Updating Card");

      // Update Card
      await updateCard(card._id, {
        name: cardName ? cardName : card.name,
        description: cardEffect ? cardEffect : card.description,
        image_url: imageUrl ? imageUrl : card.image_url,
      });
      navigate(`/`);
    } else {
      // Create Card
      console.log(cardName, cardEffect);
      const APIdata = await createCard({
        name: cardName,
        description: cardEffect,
        image_url: imageUrl,
      });
      if (APIdata) {
        alert("Card Created Successfully", APIdata.data);
      }
    }
  };
  // "w-full max-w-xs mx-auto mt-20 p-4 bg-white shadow-md rounded-md"
  return (
    <div
      className={` w-full max-w-xs mx-auto mt-20 p-4 shadow-md rounded-md ${
        card ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <form onSubmit={handleSubmit}>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Enter the name of your Card :
        </label>
        <input
          type="text"
          className={`shadow appearance-none border rounded w-full py-2 px-3 my-2 leading-tight focus:outline-none focus:shadow-outline ${
            card ? "bg-gray-700 text-white" : "bg-white text-black"
          }`}
          placeholder={card ? card.title : "Enter Card Name"}
          onChange={(e) => {
            setCardName(e.target.value);
          }}
          value={cardName}
        ></input>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Enter the Image URL of the Card :
        </label>
        <input
          type="text"
          className={`shadow appearance-none border rounded w-full py-2 px-3 my-2 leading-tight focus:outline-none focus:shadow-outline ${
            card ? "bg-gray-700 text-white" : "bg-white text-black"
          }`}
          placeholder={card ? card.imageUrl : "Enter Image URL"}
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
          value={imageUrl}
        ></input>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Enter the Effect of the Card :
        </label>
        <textarea
          className={`shadow appearance-none border rounded w-full py-2 px-3 my-2 leading-tight focus:outline-none focus:shadow-outline ${
            card ? "bg-gray-700 text-white" : "bg-white text-black"
          }`}
          placeholder={card ? card.description : "Enter card description"}
          onChange={(e) => {
            setCardEffect(e.target.value);
          }}
          value={cardEffect}
        ></textarea>
        <h6 className="text-red-600 text-sm">No more than 100 words</h6>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded"
          >
            {card ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCardForm;