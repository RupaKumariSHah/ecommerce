import React from "react";
import { useState } from "react";
import { addProduct } from "./useReducer";
import { useDispatch, useSelector } from "react-redux";
function Create() {
  const [productid, setPoductid] = useState();
  const [productName, setProductName] = useState();
  const [desc, setDesc] = useState();
  const [cat, setCat] = useState();
  const [qty, setQty] = useState();
  const [price, setPrice] = useState();
  const [instock, setInStock] = useState();
  const [dis, setDiscount] = useState();
  const [images, setImages] = useState();

  //useselector for id
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  //call the functtuion
  const handleSumit = (event) => {
    event.preventDefault();
    dispatch(
      addProduct({
        productid: products[products.length - 1].id + 1,
        productName,
        desc,
        cat,
        qty,
        price,
        instock,
        dis,
        images,
      })
    );
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5 bg-">
        <h3>Add new products</h3>

        <form onSubmit={handleSumit}>
          <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              productid
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                name="productid"
                class="form-control"
                id="colFormLabel"
                placeholder="productid"
                onChange={(e) => setPoductid(e.target.value)}
              />
            </div>
          </div>
          <br />

          <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              productName
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                name="pname"
                class="form-control"
                id="colFormLabel"
                placeholder="productName"
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
          </div>
          <br />

          <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Desc
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                name="desc"
                class="form-control"
                id="colFormLabel"
                placeholder="description"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </div>
          <br />

          <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Category
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                name="cat"
                class="form-control"
                id="colFormLabel"
                placeholder="category"
                onChange={(e) => setCat(e.target.value)}
              />
            </div>
          </div>
          <br />

          <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Quantity
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                name="qty"
                class="form-control"
                id="colFormLabel"
                placeholder="quantity"
                onChange={(e) => setQty(e.target.value)}
              />
            </div>
          </div>
          <br />

          <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Price
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                name="price"
                class="form-control"
                id="colFormLabel"
                placeholder="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <br />

          <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              inStock
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                name="instock"
                class="form-control"
                id="colFormLabel"
                placeholder="inStock"
                onChange={(e) => setInStock(e.target.value)}
              />
            </div>
          </div>
          <br />

          <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              discount
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                name="dis"
                class="form-control"
                id="colFormLabel"
                placeholder="discount"
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
          </div>
          <br />

          <div class="form-group row">
            <label for="colFormLabel" class="col-sm-2 col-form-label">
              Images
            </label>
            <div class="col-sm-10">
              <input
                type="file"
                name="images"
                class="form-control"
                id="colFormLabel"
                placeholder="images"
                onChange={(e) => setImages(e.target.value)}
              />
            </div>
          </div>
          <br />
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
