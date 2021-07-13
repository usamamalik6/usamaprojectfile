import React, { useState } from "react";
import { addToCart } from "../_actions/cartActions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function AddCart({ addToCart }) {
  const history = useHistory();
  const [name, setname] = useState([]);
  const [amount, setamount] = useState([]);
  

  const onSubmit = async (e) => {
    console.log(name, amount);
    try {
      await addToCart(name, amount);
      history.push("/view");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container pt-5">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          required
          onChange={(e) => setname(e.target.value)}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          required
          type="number"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => setamount(e.target.value)} />

      </div>
      
     
      <button  className="btn btn-primary" onClick={(e) => onSubmit(e)}>
        Save
        
      </button>
    
    </div>
  );

}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addToCart })(AddCart);
