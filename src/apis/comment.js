import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  postComment(formData) {
    return apiHelper.post(`/comments`, formData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    });
  },
  deleteComment(commentId) {
    return apiHelper.delete(`/comments/${commentId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    });
  }
};
