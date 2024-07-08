import css from "./LoadMoreBtn.module.css";
import { MouseEvent } from "react";

type Props = {
  clickMore: (e: MouseEvent<HTMLButtonElement>) => void;
};

function LoadMoreBtn({ clickMore }: Props) {
  return (
    <div className={css.container}>
      <button className={css.btn} type="button" onClick={clickMore}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
