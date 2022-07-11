import { Card, Typography } from "@mui/material";
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
      <Card
        className="joke-answer-card"
        onClick={() => setPunchline(!punchline)}
      >
        <div className="jokersondeck">
          <Typography className="joke-text"> {jokes[index]?.setup} </Typography>
          {punchline && (
            <Typography className="punchline-text">
              {jokes[index]?.punchline}
            </Typography>
          )}
        </div>
        <div className="arrows">
          <ArrowBackIosIcon
            className="arrow"
            onClick={() => setIndex(index - 1) && setPunchline({ ...false })}
          />
          <ArrowForwardIosIcon
            className="arrow"
            onClick={() => setIndex(index + 1) && setPunchline({ ...false })}
          />
        </div>
      </Card>
    </>
  );
};
export default JokeCard;
