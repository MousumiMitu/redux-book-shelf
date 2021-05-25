import React from "react";
import { useDispatch } from "react-redux";
import { HiPlusCircle, HiMinusCircle, HiCheckCircle } from "react-icons/hi";
import styles from "./book.module.css";
import {
  addToReadingList,
  removeFromReadingList,
  addToFinishedList,
} from "../../Redux/Action/bookAction";
const SingleBook = (props) => {
  const { title, author, coverImageUrl, synopsis, id } = props.book;
  const dispatch = useDispatch();
  return (
    <div className="card d-flex mb-3 p-3" style={{ position: "relative" }}>
      <div className="row">
        <div className="col-md-3">
          <img className="img-fluid" src={coverImageUrl} alt="" />
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6>{author}</h6>
            <p className="card-text">{synopsis.slice(0, 500)} ...</p>
          </div>
        </div>
      </div>
      <div className={styles.control_icons}>
        <HiMinusCircle
          title="Remove from list"
          onClick={() => dispatch(removeFromReadingList(id))}
          className={styles.minus_icon}
        />
        <HiPlusCircle
          title="Add to Reading"
          onClick={() => dispatch(addToReadingList(props.book))}
          className={styles.plus_icon}
        />
        <HiCheckCircle
          title="Mark as Finish"
          onClick={() => dispatch(addToFinishedList(props.book))}
          className={styles.check_icon}
        />
      </div>
    </div>
  );
};

export default SingleBook;
