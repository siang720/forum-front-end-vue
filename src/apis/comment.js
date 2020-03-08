import { apiHelper } from "./../utils/helpers";

export default {
  postComment(formData) {
    return apiHelper.post(`/comments`, formData);
  },
  deleteComment(commentId) {
    return apiHelper.delete(`/comments/${commentId}`);
  }
};
