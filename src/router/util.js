import router from "./index";

// import { useRouter } from "vue-router";
// const router = useRouter();

export const pushWrite = (query = {}) => {
  router.push({
    name: "write",
    query,
  });
};
