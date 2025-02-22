import { Button } from '@/components/ui/button';
import { FC } from 'react';

interface MenuViewProps {
  onStartSetup: () => void;
}

const MenuView: FC<MenuViewProps> = ({ onStartSetup }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl text-center font-bold uppercase text-yellow-400">
        the classic naval combat game
      </h1>
      <span className="text-xs max-w-md mt-1 mb-4 text-gray-500">
        Welcome to the game Sea Battle! The game was developed as a technical
        task specifically for Sergey Babich's YouTube channel. To start the
        game, click "Start Game" and enjoy!
      </span>

      <Button onClick={onStartSetup}>Start new game</Button>
    </div>
  );
};

export default MenuView;
