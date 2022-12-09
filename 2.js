const {readFileSync} = require('fs');


const contents = readFileSync('./input2.txt', 'utf-8');

const ROCK = ['A', 'X']
const PAPER = ['B', 'Y']
const SCISSOR = ['C', 'Z']

const WIN_SCORE = 6
const DRAW_SCORE = 3
const LOST_SCORE = 0

const ROCK_SCORE = 1
const PAPER_SCORE = 2
const SCISSOR_SCORE = 3


const calculateScore = (opponentMove, responseMove) => {
  // DRAWS
  if (ROCK.includes(opponentMove) && ROCK.includes(responseMove)) {
    return DRAW_SCORE + ROCK_SCORE
  }
  if (PAPER.includes(opponentMove) && PAPER.includes(responseMove)) {
    return DRAW_SCORE + PAPER_SCORE
  }
  if (SCISSOR.includes(opponentMove) && SCISSOR.includes(responseMove)) {
    return DRAW_SCORE + SCISSOR_SCORE
  }

  // Wins
  if (ROCK.includes(opponentMove) && PAPER.includes(responseMove)) {
    return WIN_SCORE + PAPER_SCORE
  }
  if (PAPER.includes(opponentMove) && SCISSOR.includes(responseMove)) {
    return WIN_SCORE + SCISSOR_SCORE
  }
  if (SCISSOR.includes(opponentMove) && ROCK.includes(responseMove)) {
    return WIN_SCORE + ROCK_SCORE
  }

  // Losses
  if (ROCK.includes(opponentMove) && SCISSOR.includes(responseMove)) {
    return LOST_SCORE + SCISSOR_SCORE
  }
  if (PAPER.includes(opponentMove) && ROCK.includes(responseMove)) {
    return LOST_SCORE + ROCK_SCORE
  }
  if (SCISSOR.includes(opponentMove) && PAPER.includes(responseMove)) {
    return LOST_SCORE + PAPER_SCORE
  }
}

let score = 0;
contents.split(/\r?\n/).forEach((content) => {
  const opponentMove = content[0]

  const responseMove = content[content.length - 1]

  score += calculateScore(opponentMove, responseMove);
})

console.log(score);


// Part 2

const LOSE = 'X'
const DRAW = 'Y'
const WIN = 'Z'

const calculateNewScore = (opponentMove, responseMove) => {
  // DRAWS
  if (ROCK.includes(opponentMove) && responseMove === DRAW) {
    return DRAW_SCORE + ROCK_SCORE
  }
  if (PAPER.includes(opponentMove) && responseMove === DRAW) {
    return DRAW_SCORE + PAPER_SCORE
  }
  if (SCISSOR.includes(opponentMove) && responseMove === DRAW) {
    return DRAW_SCORE + SCISSOR_SCORE
  }

  // Wins
  if (ROCK.includes(opponentMove) && responseMove === WIN) {
    return WIN_SCORE + PAPER_SCORE
  }
  if (PAPER.includes(opponentMove) && responseMove === WIN) {
    return WIN_SCORE + SCISSOR_SCORE
  }
  if (SCISSOR.includes(opponentMove) && responseMove === WIN) {
    return WIN_SCORE + ROCK_SCORE
  }

  // Losses
  if (ROCK.includes(opponentMove) && responseMove === LOSE) {
    return LOST_SCORE + SCISSOR_SCORE
  }
  if (PAPER.includes(opponentMove) && responseMove === LOSE) {
    return LOST_SCORE + ROCK_SCORE
  }
  if (SCISSOR.includes(opponentMove) && responseMove === LOSE) {
    return LOST_SCORE + PAPER_SCORE
  }
}


let newScore = 0;
contents.split(/\r?\n/).forEach((content) => {
  const opponentMove = content[0]

  const responseMove = content[content.length - 1]

  newScore += calculateNewScore(opponentMove, responseMove);
})

console.log(newScore)