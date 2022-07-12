import { Button, Card, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const JokeCard = () => {
  const [jokes, setJokes] = useState([]);
  const [index, setIndex] = useState(0);
  const [punchline, setPunchline] = useState(false);

  useEffect(() => {
    (async () => {
      const ret = await fetch("https://api.sampleapis.com/jokes/goodJokes");
      const data = await ret.json();
      setJokes(data);
    })();
  }, []);

  return (
    <>
      <div className="header">
        <Card className="header-card"> </Card>
      </div>
      <Card className="joke-answer-card">
        <div className="jokersondeck">
          <Typography className="joke-text"> {jokes[index]?.setup} </Typography>
          {punchline && (
            <Typography className="punchline-text">
              {jokes[index]?.punchline}
            </Typography>
          )}
          {!punchline && (
            <Button
              className="solution"
              variant="contained"
              color="secondary"
              onClick={() => setPunchline(!punchline)}
            >
              Punchline
            </Button>
          )}
        </div>
        <div className="arrows">
          <IconButton
            disabled={index === 0}
            onClick={() => {
              setIndex(index - 1);
              setPunchline(false);
            }}
          >
            {" "}
            <ArrowBackIosIcon className="arrow" />
          </IconButton>

          <IconButton
            disabled={index + 1 === jokes.length}
            onClick={() => {
              setIndex(index + 1);
              setPunchline(false);
            }}
          >
            <ArrowForwardIosIcon className="arrow" />
          </IconButton>
        </div>
      </Card>
    </>
  );
};
export default JokeCard;
