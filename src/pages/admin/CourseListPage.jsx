import { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { FaTrash, FaWrench } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import "../../styles/StaffListPage.scss";

const CourseListPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="staff-list-container">
      <div className="top-bar d-flex justify-content-between align-items-center mb-3">
        <div
          className="search-box"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            style={{ background: "white" }}
          />
          <button>
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="table-wrapper">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Author</th>
              <th>Title</th>
              <th>Create at</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <tr key={index}>
                <td>1</td>
                <td>Loreal</td>
                <td>Sản phẩm cho da nhạy cảm</td>
                <td>2021-05-15</td>
                <td>Active</td>
                <td className="action-buttons">
                  <button className="btn btn-light me-2">
                    <FaTrash color="red" />
                  </button>
                  <button className="btn btn-light">
                    <FaWrench color="yellow" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>
              <MdCancel />
            </span>
            <div className="form">
              <h2>Create New Staff</h2>
              <form>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="position"
                    placeholder="Enter position"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter contact email"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="number"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="date"
                    placeholder="Enter date of joining"
                  />
                </div>
                {/* <div>
                         <label htmlFor="brand">Brand: </label>
                         <select value={arttool.brand} name='brand' onChange={handleChange}>
                             <option value="">Choose brand</option>
                             <option value="KingArt">KingArt</option>
                             <option value="Color Splash">Color Splash</option>
                             <option value="Edding">Edding</option>
                             <option value="Arteza">Arteza</option>
                         </select>
                         <br/>
                         {errors.brand_err && <span className='error'>{errors.brand_err}</span>}
                     </div>
                     <div>
                         <label htmlFor="limitedTimeDeal">Limited Time Deal: </label>
                         <input type="number" name='limitedTimeDeal' value={arttool.limitedTimeDeal} step="1" onChange={handleChange} />
                     </div> */}
                <button type="submit" className="form-button">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseListPage;
