import css from "../src/App.module.css";

import { useEffect, useState } from "react";
import getRespAPI from "./photos-api";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

type status = true | false;

export type Object = {
  id: number;
  urls: { small: string };
  alt_description: string;
};

type Response = {
  total_pages: number;
  results: [];
};

function App() {
  const [photos, setPhotos] = useState<Object[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoader, setIsLoader] = useState<status>(false);
  const [isError, setIsError] = useState<status>(false);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setIsOpen] = useState<status>(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [totalPages, setTotalPages] = useState<status>(false);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }
    async function getPhotos(): Promise<void> {
      try {
        setIsError(false);
        setIsLoader(true);
        const resp: Response = await getRespAPI(searchQuery, page);
        setTotalPages(page < Math.ceil(resp.total_pages / 20));
        console.log(resp);
        const photos = resp.results;
        setPhotos((prevState) => [...prevState, ...photos]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getPhotos();
  }, [searchQuery, page]);

  async function hadleSearch(topic: string): Promise<void> {
    setSearchQuery(topic);
    setPage(1);
    setPhotos([]);
  }

  async function handleMoreBtn(): Promise<void> {
    setPage((prevState) => prevState + 1);
  }

  function openModal(): void {
    setIsOpen(true);
  }
  function closeModal(): void {
    setIsOpen(false);
  }

  function handleSelectPhoto(photo: any): void {
    setSelectedImg(photo);
    openModal();
  }

  return (
    <div>
      <SearchBar onSearch={hadleSearch} />
      {isError && <ErrorMessage />}
      {photos.length > 0 && (
        <ImageGallery data={photos} handleSelectPhoto={handleSelectPhoto} />
      )}
      {isLoader && <Loader />}
      {totalPages && <LoadMoreBtn clickMore={handleMoreBtn} />}
      {selectedImg !== null && (
        <ImageModal
          selectedImg={selectedImg}
          modalIsOpen={modalIsOpen}
          onIsCloseModal={closeModal}
        />
      )}
    </div>
  );
}

export default App;
