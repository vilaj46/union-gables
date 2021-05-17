export default function (images, room) {
  const length = room.length;

  return images.filter((img) => {
    const name = img.node.base;
    const slice = name.slice(0, length);
    return slice === room;
  });
}
