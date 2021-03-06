// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
//   onDelete: 'SET NULL'
});

// User.belongsToMany(Post, {
//     through: "UserPosts",
//     // as:"posts",
//   foreignKey: 'user_id',
// //   onDelete: 'SET NULL'
// });

// Post.belongsToMany(User, {
//     through:"UserPosts",
//     // as:"users",
//   foreignKey: 'post_id',
// //   onDelete: 'SET NULL'
// });

Comment.belongsTo(User, {
  foreignKey: 'user_id',
//   onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
//   onDelete: 'SET NULL'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
//   onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };
