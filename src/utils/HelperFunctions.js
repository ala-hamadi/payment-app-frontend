//Shows the popup
export const notify = (message, toast, type) => {
  const toastMessageOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  };
  if (type === "success") toast.success(message, toastMessageOptions);
  else if (type === "info") toast.info(message, toastMessageOptions);
  else if (type === "error") toast.error(message, toastMessageOptions);
};
export const timestampToStringDate = (date) => {
  //from timestamp to dd/mm/yyyy
  if (date)
    return date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);
};
