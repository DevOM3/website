export const initialState = {
  mode: "dark",
  currentPage: "Home",
  greetShown: false,
  showModal: false,
  forPrompt: false,
  showCertificateModal: false,
  certificate: "",
};

export const actionTypes = {
  SET_MODE: "SET_MODE",
  SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
  SET_GREET_SHOWN: "SET_GREET_SHOWN",
  SET_SHOW_MODAL: "SET_SHOW_MODAL",
  SET_FOR_PROMPT: "SET_FOR_PROMPT",
  SET_SHOW_CERTIFICATE_MODAL: "SET_SHOW_CERTIFICATE_MODAL",
  SET_CERTIFICATE: "SET_CERTIFICATE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case actionTypes.SET_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    case actionTypes.SET_GREET_SHOWN:
      return {
        ...state,
        greetShown: action.greetShown,
      };
    case actionTypes.SET_SHOW_MODAL:
      return {
        ...state,
        showModal: action.showModal,
      };
    case actionTypes.SET_FOR_PROMPT:
      return {
        ...state,
        forPrompt: action.forPrompt,
      };
    case actionTypes.SET_SHOW_CERTIFICATE_MODAL:
      return {
        ...state,
        showCertificateModal: action.showCertificateModal,
      };
    case actionTypes.SET_CERTIFICATE:
      return {
        ...state,
        certificate: action.certificate,
      };
    default:
      return state;
  }
};

export default reducer;
