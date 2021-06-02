const organizeEdges = (edges) => {
  const obj = {};

  edges.forEach((edge) => {
    const split = edge.node.base.split("- ");
    const fileName = split[0].trim();
    const alt = split[1].slice(0, split[1].length - 4).trim();
    obj[fileName] = {
      data: edge,
      alt,
    };
  });

  return obj;
};

export default organizeEdges;
