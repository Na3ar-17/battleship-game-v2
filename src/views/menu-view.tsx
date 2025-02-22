import { Button } from '@/components/ui/button';
import { FC } from 'react';

interface MenuViewProps {
  onStartSetup: () => void;
}

const MenuView: FC<MenuViewProps> = ({ onStartSetup }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl text-center uppercase font-light text-yellow-400">
        the classic combat game
      </h1>
      <h1 className="text-zinc-100 text-8xl mt-5 text-center font-bold uppercase">
        Battleship
      </h1>
      <span className="text-sm max-w-5xl text-center mx-auto mt-4 mb-10 text-zinc-100">
        Welcome to the game Sea Battle! To start the game, click "Start Game"
        and enjoy!
      </span>

      <Button size={'lg'} onClick={onStartSetup}>
        Start game
      </Button>
    </div>
  );
};

export default MenuView;
