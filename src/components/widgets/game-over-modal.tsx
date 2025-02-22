import { useAppContext } from '@/context/app-context';
import { Button } from '../ui/button';
import { Dialog, DialogContent } from '../ui/dialog';

interface GameOverModalProps {
  onClose: () => void;
}

const GameOverModal = ({ onClose }: GameOverModalProps) => {
  const { winner, resetGame } = useAppContext();

  const handleClose = () => {
    resetGame();
    onClose();
  };

  return (
    <Dialog
      open={winner !== null}
      onClose={handleClose}
      aria-labelledby="game-over-modal-title"
      aria-describedby="game-over-modal-description"
    >
      <DialogContent className="rounded-xl max-w-xl w-full aspect-video h-auto p-5">
        {winner === 'user' ? 'Ви перемогли!' : 'Ви програли!'}
        <Button onClick={handleClose}>Close</Button>
      </DialogContent>
    </Dialog>
  );
};

export default GameOverModal;
