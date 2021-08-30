class TicTacToe {
    currentPlayer = 'x';
    gameField = [
      [ null, null, null],
      [ null, null, null],
      [ null, null, null],
    ];

    getCurrentPlayerSymbol() {
      return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.gameField[rowIndex][columnIndex]) {
        return;
      }
      this.gameField[rowIndex][columnIndex] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === 'x' ? 'o' :'x';
    }

    isFinished() {
      if (this.getWinner() !== null || this.isDraw() === true) {
        return true;
      } else {
        return false;
      }
    }

    getWinner() {
      let winner;

      for (let i = 0; i < this.gameField.length; i++) {
        if ((this.gameField[i][0] === this.gameField[i][1] && this.gameField[i][0] === this.gameField[i][2]) && this.gameField[i][0] !== null) {
          return this.gameField[i][0] === 'x' ? 'x' : 'o';
        }
      }

      for (let i = 0; i < this.gameField[0].length; i++) {
        if ((this.gameField[0][i] === this.gameField[1][i] && this.gameField[0][i] === this.gameField[2][i]) && this.gameField[0][i] !== null) {
          return this.gameField[0][i] === 'x' ? 'x' : 'o';
        }
      }

      if ((this.gameField[0][0] === this.gameField[1][1] && this.gameField[0][0] === this.gameField[2][2]) && this.gameField[0][0] !== null) {
        return this.gameField[0][0] === 'x' ? 'x' : 'o';
      }

      if ((this.gameField[0][2] === this.gameField[1][1] && this.gameField[0][2] === this.gameField[2][0]) && this.gameField[0][2] !== null) {
        return this.gameField[0][2] === 'x' ? 'x' : 'o';
      }

      return null;
    }

    noMoreTurns() {
      let isNoTurn = true;
      for (let i = 0; i < this.gameField.length; i++) {
        for (let j = 0; j < this.gameField[0].length; j++) {
          if (this.gameField[i][j] === null) {
            isNoTurn = false;
            break;
          }
        }
      }
      return isNoTurn;
    }

    isDraw() {
      if (this.noMoreTurns() === true && this.getWinner() === null) {
        return true;
      } else {
        return false;
      }
    }

    getFieldValue(rowIndex, colIndex) {
      return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
