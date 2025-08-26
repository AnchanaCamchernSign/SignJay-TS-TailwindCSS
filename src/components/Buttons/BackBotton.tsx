import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, colors } from "@mui/material";

function BackButton(props: { text: string }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="pt-12 flex justify-start">
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={handleGoBack}
        sx={{
          backgroundColor: "#4CAF50",
          color: "white",
          "&:hover": {
            backgroundColor: "#45A049",
          },
        }}
      >
        {props.text}
      </Button>
    </div>
  );
}

export default BackButton;
