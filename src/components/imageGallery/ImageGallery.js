import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SearchBox from "./Components/SearchBox";
import "./gallery.scss";
import pixabayApi from "./services/PixabayAPI";
import axios from "axios";
import PaginationImages from "./Components/Pagination";
import ImageCard from "./Components/imageCard";

function ImageGallery({ images, onAddImages, uniqAddImages }) {
  const [pagesCount, setPagesCount] = useState(1);
  const [allPagesCount, setAllPagesCount] = useState(1);
  const [querySearch, usequerySearch] = useState("");
  const [isUniqPage, setIsUniqPage] = useState(true);

  useEffect(() => {
    if (querySearch !== "" && isUniqPage) {
      let CancelToken = axios.CancelToken;
      let source = CancelToken.source();

      pixabayApi(querySearch, pagesCount, { cancelToken: source.token }).then(
        (data) => {
          if (allPagesCount === 1) {
            setAllPagesCount(data.totalHits);
          }
          uniqAddImages(data.hits);
        }
      );
    }

    if (querySearch !== "" && !isUniqPage) {
      let CancelToken = axios.CancelToken;
      let source = CancelToken.source();

      pixabayApi(querySearch, pagesCount, { cancelToken: source.token }).then(
        (data) => {
          onAddImages(data.hits);
        }
      );
    }
  }, [
    querySearch,
    pagesCount,
    isUniqPage,
    allPagesCount,
    onAddImages,
    uniqAddImages,
  ]);

  const submitQueryHandler = (query) => {
    usequerySearch(query);
  };

  const changePageHandler = (event) => {
    setPagesCount(Number(event.target.textContent));
    if (!isUniqPage) {
      setIsUniqPage(true);
    }
  };

  const loadMoreHandler = () => {
    setPagesCount(pagesCount + 1);
    if (isUniqPage) {
      setIsUniqPage(false);
    }
  };

  let flattedArr = images.flat();

  return (
    <div className="wrapperImageGallery">
      <SearchBox onSubmitQueryHandler={submitQueryHandler} />
      <div className="imagesGallery">
        {flattedArr.map(({ id, webformatURL, tags }) => (
          <ImageCard key={id} webformatURL={webformatURL} tags={tags} />
        ))}
      </div>

      <div className="paginationSection">
        {images.length > 0 && (
          <>
            <button className="js-btn-loadMore" onClick={loadMoreHandler}>
              load more
            </button>

            <PaginationImages
              allPagesCount={allPagesCount}
              currentPage={pagesCount}
              onChangePageHandler={changePageHandler}
            />
          </>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  images: state.gallery,
});

const mapDispatchToProps = (dispatch) => ({
  onAddImages: (images) => dispatch({ type: "addImages", payload: images }),
  uniqAddImages: (images) =>
    dispatch({ type: "uniqAddImages", payload: images }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);
