//pending
export const handlePending = state => {
  state.isLoading = true;
};
//rejected
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
//fulfilld
export const handleFulfilled = state => {
  state.isLoading = false;
};
