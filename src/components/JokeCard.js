import { Card, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const jokeCard = () => {
  return (
    <>
      <div className="header">
        <Card className="header-card"> </Card>
      </div>
      <div className="joke-card">
        <Card className="joke-answer-card">
          <Typography className="joke-text"> enter your joke here </Typography>
          <Typography className="answer-text">
            enter your answer here
          </Typography>
        </Card>
      </div>
    </>
  );
};

export default jokeCard;
