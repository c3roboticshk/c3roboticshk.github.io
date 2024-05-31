import { useLocation, useNavigate } from "react-router-dom";
import GoBackIcon from "@material-ui/icons/ArrowBackIos";
import "../Styles/GoBack.css";

function GoBack() {
  const location = useLocation()
  const navigate = useNavigate();

  const goBack = () => {
    if (location.pathname !== '/') {
      navigate(-1)
    }
  } 
  if (location.pathname === '/') {
    return null
  }
  return (
    <div className="go_Back">
      <button onClick={(goBack)}>
        <GoBackIcon /> 
      </button>
    </div>
  );
}

export default GoBack;