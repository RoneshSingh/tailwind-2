import { useState } from "react";
import Card, { CardProps } from "./Card";
import Button from "./Button";

const CreateCard: React.FC = () => {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [formData, setFormData] = useState<CardProps>({
    imgName: "",
    imgSrc: "",
    title: "",
    desc: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setCards((prevCards) => [...prevCards, formData]);
    setFormData({
      imgName: "",
      imgSrc: "",
      title: "",
      desc: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Image name
          </label>
          <input
            type="text"
            name="imgName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.imgName}
            onChange={handleInputChange}
          ></input>
        </div>
        <br />
        <div className="flex gap-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Image Source URL:
          </label>
          <input
            type="text"
            name="imgSrc"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.imgSrc}
            onChange={handleInputChange}
          ></input>
        </div>
        <br />
        <div className="flex gap-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Title:
          </label>
          <input
            type="text"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.title}
            onChange={handleInputChange}
          ></input>
        </div>

        <br />
        <div className="flex gap-2">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description:
          </label>
          <input
            type="text"
            name="desc"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.desc}
            onChange={handleInputChange}
          ></input>
        </div>

        <br />
        <Button name="Add Card " />
      </form>

      <div className="flex gap-3">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CreateCard;
