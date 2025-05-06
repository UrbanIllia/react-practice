// const getRandomColor = () => {
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// };

// export default getRandomColor;
// ....................................................... Full
const getRandomColorLight = () => {
  const r = Math.floor(Math.random() * 127) + 128;
  const g = Math.floor(Math.random() * 127) + 128;
  const b = Math.floor(Math.random() * 127) + 128;
  return `rgb(${r}, ${g}, ${b})`;
};

export default getRandomColorLight;
