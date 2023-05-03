import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Home() {
  const products = useSelector((state) => state.products);
  console.log(products);
  return (
    <div className="container">
      <h2>Crud App with JSON Server</h2>
      <Link to="/create" className="btn btn success my-3">
        Create
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>productid</th>
            <th>productName</th>
            <th>desc</th>
            <th>categories</th>
            <th>quantity</th>
            <th>price</th>
            <th>inStock</th>
            <th>discount</th>
            <th>avatar</th>
          </tr>
        </thead>

        <tbody>
          {products.map((products, index) => (
            <tr key={index}>
              <td>{products.productid}</td>
              <td>{products.productName}</td>
              <td>{products.desc}</td>
              <td>{products.categories}</td>
              <td>{products.quantity}</td>
              <td>{products.price}</td>
              <td>{products.inStock}</td>
              <td>{products.discount}</td>
              <td>{products.avatar}</td>
              <td>
                <button className="btn btn-sm btn-primary">Edit</button>
                <button className="btn btn-sm ms-2 btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
