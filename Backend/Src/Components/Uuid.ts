const characters = [..."_abcdefghijklmnopqrstuvwxyz0123456789"];

const getRandomChar = () => characters[Math.floor(Math.random() * characters.length)];

const getRandomId = (size: number) => {
  const digits: string[] = [];

  for (let i = 0; i < size; i++) {
    digits.push(getRandomChar());
  }

  return digits.join("");
};

export { getRandomChar, getRandomId };
