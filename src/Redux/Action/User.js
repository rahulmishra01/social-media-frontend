import axios from "axios";

export const LoginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const { data } = await axios.post(
      "https://social-media-backend-b52h.onrender.com/api/login",
      { email, password },
      {
        Headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};

export const LoadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LoadUserRequest" });

    const { data } = await axios.get("https://social-media-backend-b52h.onrender.com/api/me",{
        withCredentials: true,
      });
    console.log("🚀 ~ LoadUser ~ data:", data);

    dispatch({ type: "LoadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "LoadUserFailure", payload: error.response.data.message });
  }
};
export const getFollowingPosts = () => async (dispatch) => {
  try {
    dispatch({ type: "postOfFollowingRequest" });
    const { data } = await axios.get("https://social-media-backend-b52h.onrender.com/api/posts", {
      withCredentials: true,
    });
    dispatch({
      type: "postOfFollowingSuccess",
      payload: data.post,
    });
  } catch (error) {
    dispatch({
      type: "postOfFollowingFailure",
      payload: error,
    });
  }
};

export const getAllUser =
  (name = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: "allUserRequest" });

      const { data } = await axios.get(
        `https://social-media-backend-b52h.onrender.com/api/users?name=${name}`,
        { withCredentials: true }
      );
      dispatch({ type: "allUserSuccess", payload: data.user });
    } catch (error) {
      dispatch({
        type: "allUserFailure",
        payload: error.response.data.message,
      });
    }
  };

export const register = (name, email, avatar, password) => async (dispatch) => {
  try {
    dispatch({ type: "RegisterRequest" });

    const { data } = await axios.post(
      "https://social-media-backend-b52h.onrender.com/api/register",
      {
        name,
        email,
        avatar,
        password,
      },
      {
        headers: { "Content-Type": "application/json" },
      },
      { withCredentials: true }
    );

    dispatch({ type: "RegisterSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "RegisterFailure", payload: error });
  }
};
export const getMyPosts = () => async (dispatch) => {
  try {
    dispatch({ type: "myPostsRequest" });
    const { data } = await axios.get("https://social-media-backend-b52h.onrender.com/api/my/posts", {
      withCredentials: true,
    });
    dispatch({ type: "myPostsSuccess", payload: data.posts });
  } catch (error) {
    dispatch({ type: "myPostsFailure", payload: error.response.data.message });
  }
};

export const LogoutUser = () => async (dispatch) => {
  try {
    dispatch({ type: "LogoutUserRequest" });
    const { data } = await axios.get("https://social-media-backend-b52h.onrender.com/api/logout", {
      withCredentials: true,
    });
    dispatch({ type: "LogoutUserSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "LogoutUserFailure",
      payload: error.response.data.message,
    });
  }
};

export const updatePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      dispatch({ type: "updatePasswordRequest" });
      const { data } = await axios.put(
        `https://social-media-backend-b52h.onrender.com/api/update/password`,
        {
          oldPassword,
          newPassword,
        },
        { withCredentials: true }
      );
      dispatch({ type: "updatePasswordSuccess", payload: data.message });
    } catch (error) {
      dispatch({
        type: "updatePasswordFailure",
        payload: error.response.data.message,
      });
    }
  };

export const deleteProfile = () => async (dispatch) => {
  try {
    dispatch({ type: "deleteProfileRequest" });
    const { data } = await axios.delete(
      `https://social-media-backend-b52h.onrender.com/api/delete/me/`,
      { withCredentials: true }
    );
    dispatch({ type: "deleteProfileSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "deleteProfileFailure",
      payload: error.response.data.message,
    });
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: "ForgotPasswordRequest" });

    const { data } = await axios.post(
      `https://social-media-backend-b52h.onrender.com/api/forgot/password`,
      { email }
    );

    dispatch({ type: "ForgotPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "ForgotPasswordFailure",
      payload: error.response.data.message,
    });
  }
};

export const resetPassword = (token, password) => async (dispatch) => {
  try {
    dispatch({ type: "ResetPasswordRequest" });
    const { data } = await axios.put(
      `https://social-media-backend-b52h.onrender.com/api/password/reset/${token}`,
      {
        password,
      }
    );
    dispatch({ type: "ResetPasswordSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "ResetPasswordFailure", payload: error });
  }
};

export const getUserPosts = (id) => async (dispatch) => {
  try {
    dispatch({ type: "userPostsRequest" });

    const { data } = await axios.get(
      `https://social-media-backend-b52h.onrender.com/api/userposts/${id}`,
      { withCredentials: true }
    );

    dispatch({ type: "userPostsSuccess", payload: data.posts });
  } catch (error) {
    dispatch({
      type: "userPostsFailure",
      payload: error.response.data.message,
    });
  }
};

export const getUserProfile = (id) => async (dispatch) => {
  try {
    dispatch({ type: "userProfileRequest" });

    const { data } = await axios.get(
      `https://social-media-backend-b52h.onrender.com/api/user/${id}`,
      { withCredentials: true }
    );

    dispatch({ type: "userProfileSuccess", payload: data.user });
  } catch (error) {
    dispatch({
      type: "userProfileFailure",
      payload: error.response.data.message,
    });
  }
};
