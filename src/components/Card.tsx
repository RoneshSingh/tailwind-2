export interface CardProps {
  imgName: string;
  imgSrc: string;
  title: string;
  desc: string;
}

const Card: React.FC<CardProps> = ({ imgName, imgSrc, title, desc }) => {
  return (
    <div>
      <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg overflow-hidden">
        <img className="w-full h-48" src={imgSrc} alt={imgName}></img>
        <div className="p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-2 text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
