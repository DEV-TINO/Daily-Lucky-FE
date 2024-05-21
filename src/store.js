import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      calendarSelected: {
        year: 2001,
        month: 12,
        date: 14,
        day: "SUN",
      },
      posts: [], // saved Post data
    };
  },
  mutations: {
    setCalendarSelected(state, selected) {
      state.calendarSelected = { ...selected };
    },
    addPost(state, post) {
      console.log("before add post", state.posts);
      state.posts.push(post);
      console.log("after add post", state.posts);
    },
    updatePost(state, post) {
      const index = state.posts.findIndex((currentPost) => {
        return (
          currentPost.year === post.year &&
          currentPost.month === post.month &&
          currentPost.date === post.date &&
          currentPost.day === post.day
        );
      });
      console.log("[Update Post]", index);
      console.log("[Update Post]", state.posts);
      if (index !== -1) {
        state.posts[index] = post;
      }
    },
    deletePost(state, dateInfo) {
      state.posts = state.posts.filter(
        (post) =>
          !(
            post.date === dateInfo.date &&
            post.month === dateInfo.month &&
            post.year === dateInfo.year
          )
      );
    },
  },
});

export default store;
