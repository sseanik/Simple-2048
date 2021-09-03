import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBoard } from '../redux/twentyFortyEightSlice';
// Components
import Header from '../components/Header';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Square from '../components/Square';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  outside: {
    padding: 20,
    height: '80vh',
  },
}));

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.ceil(max));
};

function findZeroes(array) {
  const zeroes = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) {
        zeroes.push([i, j]);
      }
    }
  }
  return zeroes;
}

function findWinner(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 2048) {
        return true;
      }
    }
  }
  return false;
}

export default function TwentyFortyEight() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const board = useSelector((state) => state.twentyFortyEight.board);

  React.useEffect(() => {
    const handleKeyPress = (event) => {
      let newBoard = [...board].map((arr) => {
        return arr.slice();
      });

      switch (event.key) {
        case 'ArrowUp':
          for (let col = 0; col < newBoard[0].length; col++) {
            let nonZeroes = [];
            for (let i = 0; i < newBoard[col].length; i++) {
              if (board[i][col] !== 0) {
                nonZeroes.push(board[i][col]);
              }
            }
            let merge = false;
            for (let j = 0; j < nonZeroes.length - 1; j++) {
              if (nonZeroes[j] === nonZeroes[j + 1] && !merge) {
                nonZeroes[j] += nonZeroes[j + 1];
                nonZeroes[j + 1] = 0;
                merge = true;
              }
              if (nonZeroes[j] === 0) {
                nonZeroes[j] = nonZeroes[j + 1];
                nonZeroes[j + 1] = 0;
              }
            }
            while (nonZeroes.length !== 4) {
              nonZeroes.push(0);
            }
            for (let k = 0; k < newBoard[0].length; k++) {
              newBoard[k][col] = nonZeroes[k];
            }
          }
          break;
        case 'ArrowDown':
          for (let col = 0; col < newBoard[0].length; col++) {
            let nonZeroes = [];
            for (let i = 0; i < newBoard.length; i++) {
              if (board[i][col] !== 0) {
                nonZeroes.push(board[i][col]);
              }
            }
            let merge = false;
            for (let j = nonZeroes.length - 1; j > 0; j--) {
              if (nonZeroes[j] === nonZeroes[j - 1] && !merge) {
                nonZeroes[j] += nonZeroes[j - 1];
                nonZeroes[j - 1] = 0;
                merge = true;
              }
              if (nonZeroes[j] === 0) {
                nonZeroes[j] = nonZeroes[j - 1];
                nonZeroes[j - 1] = 0;
              }
            }
            while (nonZeroes.length !== 4) {
              nonZeroes.unshift(0);
            }
            for (let k = 0; k < newBoard[0].length; k++) {
              newBoard[k][col] = nonZeroes[k];
            }
          }
          break;
        case 'ArrowLeft':
          for (let row = 0; row < newBoard.length; row++) {
            let nonZeroes = [];
            for (let i = 0; i < newBoard[row].length; i++) {
              if (board[row][i] !== 0) {
                nonZeroes.push(board[row][i]);
              }
            }
            let merge = false;
            for (let j = 0; j < nonZeroes.length - 1; j++) {
              if (nonZeroes[j] === nonZeroes[j + 1] && !merge) {
                nonZeroes[j] += nonZeroes[j + 1];
                nonZeroes[j + 1] = 0;
                merge = true;
              }
              if (nonZeroes[j] === 0) {
                nonZeroes[j] = nonZeroes[j + 1];
                nonZeroes[j + 1] = 0;
              }
            }
            while (nonZeroes.length !== 4) {
              nonZeroes.push(0);
            }
            newBoard[row] = nonZeroes;
          }
          break;
        case 'ArrowRight':
          for (let row = 0; row < newBoard.length; row++) {
            let nonZeroes = [];
            for (let i = 0; i < newBoard[row].length; i++) {
              if (board[row][i] !== 0) {
                nonZeroes.push(board[row][i]);
              }
            }
            let merge = false;
            for (let j = nonZeroes.length - 1; j > 0; j--) {
              if (nonZeroes[j] === nonZeroes[j - 1] && !merge) {
                nonZeroes[j] += nonZeroes[j - 1];
                nonZeroes[j - 1] = 0;
                merge = true;
              }
              if (nonZeroes[j] === 0) {
                nonZeroes[j] = nonZeroes[j - 1];
                nonZeroes[j - 1] = 0;
              }
            }
            while (nonZeroes.length !== 4) {
              nonZeroes.unshift(0);
            }
            newBoard[row] = nonZeroes;
          }
          break;
        default:
          return;
      }
      const zeroes = findZeroes(newBoard);
      if (zeroes.length === 0) {
        console.log('GAME OVER');
        return;
      }

      if (
        JSON.stringify(newBoard) !== JSON.stringify([...board]) ||
        zeroes.length === 16
      ) {
        const [x, y] = zeroes[getRandomInt(zeroes.length)];
        newBoard[x][y] = 2;
      }

      dispatch(setBoard(newBoard));
      if (findWinner(newBoard)) {
        console.log('Winner');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [board, dispatch]);

  return (
    <>
      <Header create={false} />

      <div className={classes.outside} onKeyPress={(e) => console.log(e)}>
        <div className={classes.root}>
          {board &&
            board.map((_, i) => (
              <Grid
                container
                key={i}
                spacing={2}
                wrap={'nowrap'}
                className={classes.container}
              >
                {board[i].map((_, j) => (
                  <Square key={`${i} ${j}`} number={board[i][j]} />
                ))}
              </Grid>
            ))}
        </div>
      </div>
    </>
  );
}
