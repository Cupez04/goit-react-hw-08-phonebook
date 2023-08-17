import { useLottie } from "lottie-react";
import error from "../assets/img/error.json"
import { Button, Card } from "@mui/material";

const NotFoundPage = () => {

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: error,
    }

    const { View } = useLottie(lottieOptions);


  return (
      <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "white",
          height: "100vh",
      }}>
          <Card
              sx={{
                  
                  transition: "0.5s",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
          }}>
              
              {View}
              <Button style={{marginBottom:"3em"}} variant="outlined">
                  Go Back
              </Button>
          </Card>
      </div>
  )
}

export default NotFoundPage;