module.exports = (sequelize, DataType) => {
  const Post = sequelize.define("Post", {
    title: {
      type: DataType.STRING,
      allowNull: false,
    },
    description: {
      type: DataType.STRING,
      allowNull: false,
    },
    userName: {
      type: DataType.STRING,
      allowNull: false,
    },
    likes: {
      type: DataType.INTEGER,
      allowNull: true,
    },
    date: {
      type: DataType.DATE,
      allowNull: true,
    },
  });

  return Post;
};
