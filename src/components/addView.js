import React, { useState } from "react";
import { connect } from "react-redux";


function AddView({ list }) {
 
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  list: state.cart.allList,
});

export default connect(mapStateToProps, {})(AddView);
