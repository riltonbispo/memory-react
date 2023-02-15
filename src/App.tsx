import { useEffect, useState } from "react";


import * as C from "./App.styles";
import logoImage from "./assets/devmemory_logo.png";
import RestartIcon from "./svgs/restart.svg";

import { Button } from "./components/Button";
import { InfoItem } from "./components/InfoItem";
import { GridItemType } from "./types/GridItemTypes";

const App = () => {
  const [playing, setPlaying] = useState<boolean>(false)
  const [timeElapsed, setTimeElapsed] = useState<number>(0)
  const [moveCount, setMoveCount] = useState<number>(0)
  const [shownCount, setShownCount] = useState<number>(0)
  const [gridItems, setGridItems] = useState<GridItemType[]>([])


  useEffect(() => resetAndCreatGrid(), []);

  const resetAndCreatGrid = () => {


  };

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width="200" alt="" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value="00:00"></InfoItem>
          <InfoItem label="Movimentos" value="0"></InfoItem>
        </C.InfoArea>

        <Button
          label="Reiniciar"
          icon={RestartIcon}
          onClick={resetAndCreatGrid}
        ></Button>
      </C.Info>
      <C.GridArea>
        <C.Grid></C.Grid>
      </C.GridArea>
    </C.Container>
  );
};

export default App;
