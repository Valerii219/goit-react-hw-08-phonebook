export const selectAuth = state => state.auth.token;
export const selectUser = state => state.auth.user.email;
export const selectLoading = state => state.auth.isLoading;

const authSelectors = {
    selectAuth,
    selectUser,
    selectLoading,
}
export default authSelectors;