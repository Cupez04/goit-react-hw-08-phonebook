import { useLottie } from "lottie-react";
import libreta from "../assets/img/libreta.json"
import { Button, Card } from "@mui/material";
import { useAuth } from "../hooks";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: libreta,
  };

  const { View } = useLottie(lottieOptions);

  const handleNavigate = () => {
    isLoggedIn ? navigate('/contacts') : navigate('/login')
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "white",
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      }}
    >
      <h1 style={{marginBottom: "30px"}}>Welcome to your PhoneBook!</h1>
      <Button
        onClick={handleNavigate}
        style={{
          zIndex: "2"
        }}
        variant="contained"
      >
        GET STARTED
      </Button>
      <div style={{ width: "40%", marginTop: "-2.5em" }}>
        <Card
          sx={{
            transition: "0.5s",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%", // Ensure the card takes the full width of the container
            "&:hover": {
              transform: "scale(1.01)",
            },
          }}
        >
          {View}
        </Card>
      </div>
    </div>
  );
};
export default Home;
