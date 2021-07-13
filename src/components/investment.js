import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

function AddView({ list }) {
  const history = useHistory();
  const [slectList, setslectList] = useState([]);
  const search = (value) => {
    const found = list?.find((item) => {
      return item?.id === value;
    });
    setslectList([found]);
  };
  return (
    <div className="container">
      <label className="form-label">Search</label>
      <input
        required
        onChange={(e) => search(e.target.value)}
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <select class="form-select mt-5" aria-label="Default select example">
        <option selected>ID</option>
        {slectList?.map((item) => (
          <option value={item?.id}>{item?.id}</option>
        ))}
      </select>
      <select class="form-select mt-4" aria-label="Default select example">
        <option selected>Amount</option>
        {slectList?.map((item) => (
          <option value={item?.amount}>{item?.amount}</option>
        ))}
      </select>
      <button onClick={(e)=>{

      
      setslectList(e.target.value)

        history.push('./view' );
      }}>Add</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.cart.bondList,
});

export default connect(mapStateToProps, {})(AddView);
