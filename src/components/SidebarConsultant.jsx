import { Link } from "react-router-dom";
import "../styles/SidebarAdmin.scss";
import {
  FaBlog,
  FaBook,
  FaClipboardList,
  FaGauge,
  FaIdBadge,
  FaRightFromBracket,
  FaUser,
  FaUserCheck,
} from "react-icons/fa6";
import { Book, GolfCourse, ManageAccountsOutlined } from "@mui/icons-material";

const SidebarConsultant = ({ isOpen }) => {
  return (
    <div className={`sidebar-admin ${isOpen ? "open" : "collapsed"}`}>
      {/* Navigation */}
      <ul className="sidebar-menu">
        <li>
          <Link to="/consultant/certificate">
            <FaGauge className="icon" /> Certificate
          </Link>
        </li>
        <li>
          <Link to="/consultant/booking">
            <ManageAccountsOutlined className="icon" /> Booking
          </Link>
        </li>
        <li>
          <Link to="/consultant/blog">
            <FaIdBadge className="icon" /> My blog
          </Link>
        </li>
        <li>
          <Link to="/consultant/course">
            <Book className="icon" /> Course
          </Link>
        </li>

        <li>
          <Link to="/admin/login">
            <FaRightFromBracket className="icon" /> Logout
          </Link>
        </li>
      </ul>

      {/* Profile */}
      <div className="sidebar-footer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"
          alt="Admin Avatar"
        />
        <div>
          <strong>Consultant</strong>
          <Link to="#">
            <div className="text-muted">View profile</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarConsultant;
