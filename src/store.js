import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      emojis: ["lucky", "happy", "sad", "angry"],
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
      bottomMenu: ["write", "calendar", "challenge"],
      days: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      daysFullNames: {
        SUN: "Sunday",
        MON: "Monday",
        TUE: "Tuesday",
        WED: "Wednesday",
        THU: "Thursday",
        FRI: "Friday",
        SAT: "Saturday",
      },
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
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
});

export default store;
