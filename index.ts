
const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;

enum RawTile {
  AIR,
  FLUX,
  UNBREAKABLE,
  PLAYER,
  STONE, FALLING_STONE,
  BOX, FALLING_BOX,
  KEY1, LOCK1,
  KEY2, LOCK2
}

interface Tile2 {
  isAir(): Boolean;
  isFlux(): Boolean;
  isUnbreakable(): Boolean;
  isPlayer(): Boolean;
  isStone(): Boolean;
  isFallingStone(): Boolean;
  isBox(): Boolean;
  isFallingBox(): Boolean;
  isKey1(): Boolean;
  isLock1(): Boolean;
  isKey2(): Boolean;
  isLock2(): Boolean;
  draw(g: CanvasRenderingContext2D, x: number, y: number): void;
  isEdible(): Boolean;
  isPushable(): Boolean;
  moveHorizontal(dx: number): void;
  moveVertical(dy: number): void;
  update(x: number, y: number): void;
}

class Air implements Tile2 {
  update(x: number, y: number) {
  }
  moveVertical(dy: number) {
    moveToTile(playerx, playery + dy);
  }
  moveHorizontal(dx: number): void {
    moveToTile(playerx + dx, playery);
  }
  isPushable(): Boolean {
    return false;
  }
  isEdible(): Boolean {
    return true;
  }
  isAir(): Boolean {
    return true;
  }
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
  draw(g: CanvasRenderingContext2D, x: number, y: number) {
  }
}

class Flux implements Tile2 {
  update(x: number, y: number): void {
  }
  moveVertical(dy: number) {
    moveToTile(playerx, playery + dy);
  }
  moveHorizontal(dx: number): void {
    moveToTile(playerx + dx, playery);
  }
  isPushable(): Boolean {
    return false;
  }
  isEdible(): Boolean {
    return true;
  }
  isAir(): Boolean {
    return false;
  }
  isFlux(): Boolean {
    return true;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
  draw(g: CanvasRenderingContext2D, x: number, y: number) {
    g.fillStyle = "#ccffcc";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}

class Unbreakable implements Tile2 {
  update(x: number, y: number): void {
  }
  moveVertical(dy: number): void {
  }
  moveHorizontal(dx: number): void {
  }
  isPushable(): Boolean {
    return false;
  }
  isEdible(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return true;
  }
  isPlayer(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
  draw(g: CanvasRenderingContext2D, x: number, y: number) {
    g.fillStyle = "#999999";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}

class Player implements Tile2 {
  update(x: number, y: number): void {
  }
  moveVertical(dy: number): void {
  }
  moveHorizontal(dx: number): void {
  }
  isPushable(): Boolean {
    return false;
  }
  isEdible(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return true;
  }
  isStone(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
  draw(g: CanvasRenderingContext2D, x: number, y: number) {
  }
}

class Stone implements Tile2 {
  update(x: number, y: number): void {
    if (map[y + 1][x].isAir()) {
      map[y + 1][x] = new FallingStone();
      map[y][x] = new Air();
    }
  }
  moveVertical(dy: number) {
  }
  moveHorizontal(dx: number): void {
    if (map[playery][playerx + dx + dx].isAir() && !map[playery + 1][playerx + dx].isAir()) {
      map[playery][playerx + dx + dx] = this;
      moveToTile(playerx + dx, playery);
    }
  }
  isPushable(): Boolean {
    return true;
  }
  isEdible(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return true;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
  draw(g: CanvasRenderingContext2D, x: number, y: number) {
    g.fillStyle = "#0000cc";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}

class FallingStone implements Tile2 {
  update(x: number, y: number): void {
    if (map[y + 1][x].isAir()) {
      map[y + 1][x] = new FallingStone();
      map[y][x] = new Air();
    } else {
      map[y][x] = new Stone();
    }
  }
  moveVertical(dy: number): void {
  }
  moveHorizontal(dx: number): void {
  }
  isPushable(): Boolean {
    return false;
  }
  isEdible(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return true;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
  draw(g: CanvasRenderingContext2D, x: number, y: number) {
    g.fillStyle = "#0000cc";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}

class Box implements Tile2 {
  update(x: number, y: number): void {
    if (map[y + 1][x].isAir()) {
      map[y + 1][x] = new FallingBox();
      map[y][x] = new Air();
    }
  }
  moveVertical(dy: number): void {
  }
  moveHorizontal(dx: number): void {
    if (map[playery][playerx + dx + dx].isAir() && !map[playery + 1][playerx + dx].isAir()) {
      map[playery][playerx + dx + dx] = this;
      moveToTile(playerx + dx, playery);
    }
  }
  isPushable(): Boolean {
    return true;
  }
  isEdible(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return true;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
  draw(g: CanvasRenderingContext2D, x: number, y: number) {
    g.fillStyle = "#8b4513";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}

class FallingBox implements Tile2 {
  update(x: number, y: number): void {
    if (map[y + 1][x].isAir()) {
      map[y + 1][x] = new FallingBox();
      map[y][x] = new Air();
    } else {
      map[y][x] = new Box();
    }
  }
  moveVertical(dy: number): void {
  }
  moveHorizontal(dx: number): void {
  }
  isPushable(): Boolean {
    return false;
  }
  isEdible(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return true;
  }
  isKey1(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
  draw(g: CanvasRenderingContext2D, x: number, y: number) {
    g.fillStyle = "#8b4513";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}

class Key1 implements Tile2 {
  update(x: number, y: number): void {
  }
  moveVertical(dy: number) {
    removeLock1()
    moveToTile(playerx, playery + dy);
  }
  moveHorizontal(dx: number): void {
    removeLock1()
    moveToTile(playerx + dx, playery);
  }
  isPushable(): Boolean {
    return false;
  }
  isEdible(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return true;
  }
  isLock1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
  draw(g: CanvasRenderingContext2D, x: number, y: number) {
    g.fillStyle = "#ffcc00";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}

class Lock1 implements Tile2 {
  update(x: number, y: number): void {
  }
  moveVertical(dy: number): void {
  }
  moveHorizontal(dx: number): void {
  }
  isPushable(): Boolean {
    return false;
  }
  isEdible(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return true;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return false;
  }
  draw(g: CanvasRenderingContext2D, x: number, y: number) {
    g.fillStyle = "#ffcc00";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}

class Key2 implements Tile2 {
  update(x: number, y: number): void {
  }
  moveVertical(dy: number) {
    removeLock2()
    moveToTile(playerx, playery + dy);
  }
  moveHorizontal(dx: number): void {
    removeLock2()
    moveToTile(playerx + dx, playery);
  }
  isPushable(): Boolean {
    return false;
  }
  isEdible(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return true;
  }
  isLock2(): Boolean {
    return false;
  }
  draw(g: CanvasRenderingContext2D, x: number, y: number) {
    g.fillStyle = "#00ccff";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}

class Lock2 implements Tile2 {
  update(x: number, y: number): void {
  }
  moveVertical(dy: number): void {
  }
  moveHorizontal(dx: number): void {
  }
  isPushable(): Boolean {
    return false;
  }
  isEdible(): Boolean {
    return false;
  }
  isAir(): Boolean {
    return false;
  }
  isFlux(): Boolean {
    return false;
  }
  isUnbreakable(): Boolean {
    return false;
  }
  isPlayer(): Boolean {
    return false;
  }
  isStone(): Boolean {
    return false;
  }
  isFallingStone(): Boolean {
    return false;
  }
  isBox(): Boolean {
    return false;
  }
  isFallingBox(): Boolean {
    return false;
  }
  isKey1(): Boolean {
    return false;
  }
  isLock1(): Boolean {
    return false;
  }
  isKey2(): Boolean {
    return false;
  }
  isLock2(): Boolean {
    return true;
  }
  draw(g: CanvasRenderingContext2D, x: number, y: number) {
    g.fillStyle = "#00ccff";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}

interface Input {
  handle(): void;
}

class Right implements Input {
  handle() {
    moveHorizontal(1);
  }
}

class Left implements Input {
  handle() {
    moveHorizontal(-1);
  }
}

class Up implements Input {
  handle() {
    moveVertical(-1);
  }
}

class Down implements Input {
  handle() {
    moveVertical(1);
  }
}

let playerx = 1;
let playery = 1;
let rawMap: RawTile[][] = [
  [2, 2, 2, 2, 2, 2, 2, 2],
  [2, 3, 0, 1, 1, 2, 0, 2],
  [2, 4, 2, 6, 1, 2, 0, 2],
  [2, 8, 4, 1, 1, 2, 0, 2],
  [2, 4, 1, 1, 1, 9, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2],
];
let map: Tile2[][];

function assertExhausted(x: never): never {
  throw new Error("Unexpected object: " + x);
}

function transformTile(tile: RawTile) {
  switch (tile) {
    case RawTile.AIR: return new Air();
    case RawTile.FLUX: return new Flux();
    case RawTile.UNBREAKABLE: return new Unbreakable();
    case RawTile.PLAYER: return new Player();
    case RawTile.STONE: return new Stone();
    case RawTile.FALLING_STONE: return new FallingStone();
    case RawTile.BOX: return new Box();
    case RawTile.FALLING_BOX: return new FallingBox();
    case RawTile.KEY1: return new Key1();
    case RawTile.LOCK1: return new Lock1();
    case RawTile.KEY2: return new Key2();
    case RawTile.LOCK2: return new Lock2();
    default: assertExhausted(tile);
  }
}

function transformMap() {
  map = new Array(rawMap.length);
  for (let y = 0; y < rawMap.length; y++) {
    map[y] = new Array(rawMap[y].length);
    for (let x = 0; x <rawMap[y].length; x++) {
      map[y][x] = transformTile(rawMap[y][x]);
    }
  }
}

let inputs: Input[] = [];

function removeLock1() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x].isLock1()) {
        map[y][x] = new Air();
      }
    }
  }
}

function removeLock2() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x].isLock2()) {
        map[y][x] = new Air();
      }
    }
  }
}

function moveToTile(newx: number, newy: number) {
  map[playery][playerx] = new Air();
  map[newy][newx] = new Player();
  playerx = newx;
  playery = newy;
}

function moveHorizontal(dx: number) {
  map[playery][playerx + dx].moveHorizontal(dx);
}

function moveVertical(dy: number) {
  map[playery + dy][playerx].moveVertical(dy);
}

function update() {
  handleInputs();
  updateMap();
}

function handleInputs() {
  while (inputs.length > 0) {
    let input = inputs.pop();
    input.handle();
  }
}

function updateMap() {
  for (let y = map.length - 1; y >= 0; y--) {
    for (let x = 0; x < map[y].length; x++) {
      //updateTile(x, y);
      map[y][x].update(x, y);
    }
  }
}

// function updateTile(x: number, y: number) {
//   if ((map[y][x].isStone() || map[y][x].isFallingStone())
//     && map[y + 1][x].isAir()) {
//     map[y + 1][x] = new FallingStone();
//     map[y][x] = new Air();
//   } else if ((map[y][x].isBox() || map[y][x].isFallingBox())
//     && map[y + 1][x].isAir()) {
//     map[y + 1][x] = new FallingBox();
//     map[y][x] = new Air();
//   } else if (map[y][x].isFallingStone()) {
//     map[y][x] = new Stone();
//   } else if (map[y][x].isFallingBox()) {
//     map[y][x] = new Box();
//   }
// }

function draw() {
  let g = createGraphics();
  drawMap(g);
  drawPlayer(g);
}

function createGraphics() {
  let canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
  let g = canvas.getContext("2d");
  g.clearRect(0, 0, canvas.width, canvas.height);
  return g;
}

function drawMap(g: CanvasRenderingContext2D) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      map[y][x].draw(g, x, y);
    }
  }
}

function drawPlayer(g: CanvasRenderingContext2D) {
  g.fillStyle = "#ff0000";
  g.fillRect(playerx * TILE_SIZE, playery * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

function gameLoop() {
  let before = Date.now();
  update();
  draw();
  let after = Date.now();
  let frameTime = after - before;
  let sleep = SLEEP - frameTime;
  setTimeout(() => gameLoop(), sleep);
}

window.onload = () => {
  transformMap();
  gameLoop();
}

const LEFT_KEY = "ArrowLeft";
const UP_KEY = "ArrowUp";
const RIGHT_KEY = "ArrowRight";
const DOWN_KEY = "ArrowDown";
window.addEventListener("keydown", e => {
  if (e.key === LEFT_KEY || e.key === "a") inputs.push(new Left());
  else if (e.key === UP_KEY || e.key === "w") inputs.push(new Up());
  else if (e.key === RIGHT_KEY || e.key === "d") inputs.push(new Right());
  else if (e.key === DOWN_KEY || e.key === "s") inputs.push(new Down());
});

