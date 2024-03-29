import {
  EnumLoginPage_LoginStats,
  EnumNotFoundPage_Stats,
  EnumAppBar,
} from "./Interface";

/**
 * Sign Up
 * @remarks
 * Provides details required for Sign Up Page.
 */
const SignUp_State = {
  Title: "Sign Up",
  SignUp: {
    Text: "Already have an account?",
    Link: {
      URL: "/",
      Text: "Login",
    },
  },
  LoginButton: [
    {
      Text: "Sign Up",
      type: "emphasized",
    },
  ],
  LoginBody: [
    {
      Label: "Name",
      value: "",
      type: "text",
      placeholder: "FullName",
      component: "Input",
    },
    {
      Label: "Title",
      value: "",
      type: "text",
      placeholder: "Select Title",
      component: "Combobox",
      Combobox: [
        {
          key: "Mr",
          text: "Mr",
        },
        {
          key: "Ms",
          text: "Ms",
        },
        {
          key: "Mrs",
          text: "Mrs",
        },
      ],
    },
    {
      Label: "Contact Number",
      value: "",
      type: "number",
      placeholder: "Phone Number",
      component: "Input",
    },
    {
      Label: "Email",
      value: "",
      type: "text",
      placeholder: "Email Address",
      component: "Input",
    },
    {
      Label: "Password",
      value: "",
      type: "password",
      placeholder: "Password",
      component: "Input",
    },
  ],
};

/**
 * Login Page
 * @remarks
 * Provides details required for Login Page.
 */
const LoginPage_State = {
  Title: EnumLoginPage_LoginStats.title,
  User: "",
  Password: "",
  SignUp: {
    Text: "Don't have an account?",
    Link: {
      URL: "/SignUp",
      Text: "Sign Up",
    },
  },
  LoginButton: [
    {
      Text: "Login",
      type: "emphasized",
    },
  ],
  LoginBody: [
    {
      Label: "User",
      value: "",
      type: "text",
      placeholder: "Email Address",
    },
    {
      Label: "Password",
      value: "",
      type: "password",
      placeholder: "Password",
    },
  ],
};

/**
 * Message Alert
 * @remarks
 * Provides details required for Message Alert.
 */
const Message_Alert = {
  Alert: {
    open: false,
    Msg: {
      severity: "success",
      text: "Success",
    },
  },
};

/**
 * 404 Not Found Page
 * @remarks
 * Provides details of states for Not Found Page.
 */
const NotFoundPage_State = {
  Header: EnumNotFoundPage_Stats.Header,
  Content: EnumNotFoundPage_Stats.Content,
  Link: EnumNotFoundPage_Stats.Link,
};

/**
 * Login Page - Authenticate
 * @remarks
 * Provides details of states for Login Page user Authentication
 */
const Login_State_Authenticate = {
  isAuthenticated: false,
};
/**
 * Survey Page
 * @remarks
 * Provides details required for Survey Page.
 */
const Survey_State = {
  link: "Launch Survey",
  tiles: [
    {
      header: "Ecommerce",
      text:
        "Ecommerce is vital in Andromed. Help us improve our Ecommerce to provide better Customer Experience.",
      path: "/Survey/Ecommerce",
    },
    {
      header: "DevOps",
      text:
        "DevOps is the core of all Andromeda. Help us improve our DevOps & Infrastructure Experience.",
      path: "/Survey/DevOps",
    },
    {
      header: "Mail",
      text:
        "Email and File Storage are essential for Customers. Help us provide you with better Experience.",
      path: "/Survey/Mail",
    },
  ],
};

/**
 * Main Page
 * @remarks
 * Provides details required for Main Page.
 */
const MainPage_Options = {
  Ecommerce: false,
  DevOps: false,
  Mail: false,
  Survey: false,
  Chat: false,
};

/**
 * State - Appbar.
 *
 * @remarks
 * Provides details of immutable states for Appbar.
 *
 */
const Shellbar_State = {
  productTitle: EnumAppBar.productTitle,
  alt: EnumAppBar.alt,
  src: require("../styles/iconfinder_React.js_logo_1174949.png"),
  MenuBar: [
    {
      Text: "Account",
    },
    {
      Text: "Settings",
    },
    {
      Text: "Customer Care",
    },
    {
      Text: "Sell",
    },
    {
      Text: EnumAppBar.MenuBar_Text,
    },
  ],
};

/**
 * State -  Main Page
 * @remarks
 * Provides details required for Login Page.
 *
 */
const MainPage_State = {
  ListData: [
    { List1: ["Ecommerce", "DevOps"] },
    { List1: ["Mail", "Survey", "Chat"] },
  ],
};

/**
 * State -  Authenticated
 * @remarks
 * Provides details if user is AUthenticated.
 *
 */
const User_Authenticated = {
  isAuthenticated: false,
};

/**
 * State - Chat
 * @remarks
 * Provides details for Chat
 */
const Chat_State = {
  Screen: [
    {
      Title: "CUSTOMER CARE",
      Chat_board: [
        {
          message: "How can I help you?",
        },
      ],
      Chat_message: "",
    },
    {
      Title: "EMERGENCY",
      Chat_board: [
        {
          message: "How can I help you?",
        },
      ],
      Chat_message: "",
    },
    {
      Title: "CHANNEL",
      Chat_board: [
        {
          message: "How can I help you?",
        },
      ],
      Chat_message: "",
    },
  ],
  SocketOpen: true,
};

/**
 * State - Chat Channel
 * @remarks
 * Provides details for Chat Channel
 */
const ChatChannel_State = {
  Types: [
    {
      ButtonType: "Friends",
      ButtonText: ["Add Friends", "Add Groups", "Find Channels"],
    },
  ],
};

/**
 * Function - State
 * @description
 * Function to generate states
 */
const generateState = () => {
  return {
    Shellbar_State: Shellbar_State,
    MainPage_State: MainPage_State,
    SignUp: SignUp_State,
    Login: {
      Main: LoginPage_State,
      Authenticate: Login_State_Authenticate,
    },
    NoFound: NotFoundPage_State,
    Survey: Survey_State,
    Alert: Message_Alert,
    MainPage: MainPage_Options,
    User_Authenticated: User_Authenticated,
    Chat_State: Chat_State,
    ChatChannel_State: ChatChannel_State,
  };
};

export default generateState;
