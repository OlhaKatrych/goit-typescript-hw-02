import css from "./ImageCard.module.css";
import { MouseEvent } from "react";

export type Props = {
  item: {
    id: number;
    urls: { small: string };
    alt_description: string;
  };
  handleSelectPhoto: (value: { id: number }) => void;
};

function ImageCard({ item, handleSelectPhoto }: Props) {
  function handleSelectedPhoto(e: MouseEvent<HTMLImageElement>): void {
    handleSelectPhoto(item);
  }
  return (
    <div className={css.container}>
      <img
        className={css.pic}
        src={item.urls.small}
        alt={item.alt_description}
        onClick={handleSelectedPhoto}
      />
    </div>
  );
}

export default ImageCard;
