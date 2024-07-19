import { createStore } from "vuex";
import axios from "axios";

const PORT = "http://???";

const store = createStore({
  state() {
    return {
      emojis: [
        { emojiType: "Lucky", emojiUrl: "/images/lucky-lucky.png" },
        { emojiType: "Happy", emojiUrl: "/images/lucky-happy.png" },
        { emojiType: "Angry", emojiUrl: "/images/lucky-angry.png" },
        { emojiType: "Sad", emojiUrl: "/images/lucky-sad.png" },
      ],
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
      totalWeeks: [],
      indicators: { left: "<", right: ">" },
    };
  },
  mutations: {
    setCalendarSelected(state, selected) {
      state.calendarSelected = { ...selected };
    },
    setTotalWeeks(state, weeks) {
      state.totalWeeks = weeks;
    },
    setPosts(state, posts) {
      state.posts = posts;
    },
    setChallenges(state, challenges) {
      state.challenges = challenges;
    },
    setSelectedChallenge(state, challenge) {
      state.selectedChallenge = challenge;
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
    async fetchPosts({ commit }, { year, month }) {
      try {
        const response = await axios.post(`${PORT}/posts`, {
          year,
          month,
        });
        commit("setPosts", response.data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    },
    async createPost({ commit }, post) {
      try {
        const response = await axios.post(`${PORT}/posts/create`, post);
        if (response.data.success) {
          commit("addPost", post);
        }
      } catch (error) {
        console.error("Error creating post:", error);
      }
    },
    async deletePost({ commit }, postId) {
      try {
        const response = await axios.post(`${PORT}/posts/delete`, {
          postId,
        });
        if (response.data.success) {
          commit("deletePost", { postId });
        }
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    },

    async fetchChallenges({ commit }) {
      try {
        const response = await axios.get(`${PORT}/challenges`);
        commit("setChallenges", response.data.challenges);
      } catch (error) {
        console.error("Error fetching challenges:", error);
      }
    },
    async createChallenge({ dispatch }, challenge) {
      try {
        const response = await axios.post(
          `${PORT}/challenges/create`,
          challenge
        );
        if (response.data.success) {
          dispatch("fetchChallenges");
        }
      } catch (error) {
        console.error("Error creating challenge:", error);
      }
    },
    async selectChallenge({ commit }, challengeId) {
      try {
        const response = await axios.get(
          `${PORT}/challenges/select/${challengeId}`
        );
        if (response.data.success) {
          commit("selectChallenge", response.data);
        }
      } catch (error) {
        console.error("Error selecting challenge:", error);
      }
    },
    async findSelectedChallenge({ commit }) {
      try {
        const response = await axios.get(`${PORT}/challenges/select`);
        if (response.data.success) {
          commit("selectChallenge", response.data);
        }
      } catch (error) {
        console.error("Error finding selected challenge:", error);
      }
    },
    async deleteChallenge({ commit }, challengeId) {
      try {
        const response = await axios.post(`${PORT}/challenges/delete`, {
          challengeId,
        });
        if (response.data.success) {
          commit("deleteChallenge", challengeId);
        }
      } catch (error) {
        console.error("Error deleting challenge:", error);
      }
    },
  },
});

export default store;
