import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";
import { Object } from "../../App";

type Props = {
  data: Object[];
  handleSelectPhoto: (value: { id: number }) => void;
};

function ImageGallery({ data, handleSelectPhoto }: Props) {
  return (
    <ul className={css.list}>
      {data.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <ImageCard item={item} handleSelectPhoto={handleSelectPhoto} />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;
