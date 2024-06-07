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
      challenges: [], //saved Challenge data
      selectedChallenge: null,
      bottomMenu: {
        write: "write",
        calendar: "calendar",
        challenge: "challenge",
      },
    };
  },
  mutations: {
    setCalendarSelected(state, selected) {
      state.calendarSelected = { ...selected };
    },
    addPost(state, post) {
      state.posts.push(post);
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
    // add challenge List
    addChallenge(state, challenge) {
      state.challenges.push(challenge);
    },
    deleteChallenge(state, index) {
      state.challenges.splice(index, 1);
    },
    selectChallenge(state, challenge) {
      state.selectedChallenge = challenge;
    },
  },
  actions: {
    // create new challenge
    createChallenge({ commit }, challenge) {
      commit("addChallenge", challenge);
    },
  },
  getters: {
    getChallenges(state) {
      return state.challenges;
    },
  },
});

export default store;
