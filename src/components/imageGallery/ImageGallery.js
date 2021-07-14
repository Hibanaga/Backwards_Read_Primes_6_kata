import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import SearchBox from "./Components/SearchBox";
import "./gallery.scss";
import pixabayApi from "./services/PixabayAPI";
import axios from "axios";

function ImageGallery({ images }) {
  const [pagesCount, setPagesCount] = useState(1);
  const [querySearch, usequerySearch] = useState("");
  const [isUniqPage, setIsUniqPage] = useState(true);

  useEffect(() => {
    if (querySearch !== "" && pagesCount === 1 && isUniqPage) {
      let CancelToken = axios.CancelToken;
      let source = CancelToken.source();

      pixabayApi(querySearch);
    }
  }, [querySearch, pagesCount, isUniqPage]);

  const submitQueryHandler = (query) => {
    usequerySearch(query);
  };

  return (
    <div className="wrapperImageGallery">
      <SearchBox onSubmitQueryHandler={submitQueryHandler} />
      <div className="imagesGallery"></div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  images: state.gallery,
});

const mapDispatchToProps = (dispatch) => ({
  onAddImages: (images) => dispatch({ type: "addImages", payload: images }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);
