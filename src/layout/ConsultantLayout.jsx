import SidebarConsultant from "../components/SidebarConsultant";
import "../styles/AdminLayout.scss";

const ConsultantLayout = ({ children }) => {
  return (
    <div className="layout-main" style={{ overflowX: "hidden" }}>
      <div className="main-content" style={{ overflowX: "hidden" }}>
        <div className={`sidebar`}>
          <SidebarConsultant />
        </div>

        <div className="content" style={{ overflowX: "hidden" }}>
          <div className="component">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantLayout;
