import { SyntheticEvent } from "react";

//==============================Enum================================//
/**
 * LoginPage
 * @description
 * Enumeration having details for LoginPage
 */
export enum Util_enum {
  NotResponding = "Server did not response with any data",
  title = "Log In",
}

/**
 * 404 - Not Found Page
 * @description
 * Enumeration having details for Not Found Page
 */
export enum EnumNotFoundPage_State {
  Header = "404 Page Not Found",
  Content = "The URL entered is wrong. Click below link to navigate to Andromeda",
  Link = "Andromeda",
}

/**
 * Enumeration - Validation
 * @description
 * Enumeration for Login Page Validation
 */
export enum Error_Customer_enum {
  Customer_UsernameEmpty = "Username cannot be empty",
  Customer_UsernameInvalid = "Enter valid username",
  Customer_PasswordInvalid = "Enter valid password",
  Customer_InvalidEmailAddress = "Invalid Email Address",
  Customer_Valid = "Valid",
  Customer_Exist = "Valid Customer",
  Customer_NotExist = "Customer does not Exist",
  isCustomer_Email = "Email",
  isCustomer_Empty = "Empty",
  isCustomer_Length = "Length",
  Customer_PasswordEmpty = "Password cannot be empty",
  isCustomer_UnkowntypeforValidation = "Unkown type for Validation",
  Customer_PasswordLength = "Password should be more than 4 characters of length",
}

/**
 * Enumeration for AppBar
 * @description
 * Enumeration having details for AppBar
 */
export enum EnumAppBar {
  productTitle = "Andromeda",
  alt = "Andromeda",
  MenuBar_Text = "Logout",
}

//==============================Interface===========================//
/**
 * SignUp - Main
 * @description
 * Interface having details for LoginPage
 */
export interface SignUp_LoginBody_Interface {
  Label: string;
  value: string;
  type: string;
  placeholder: string;
  component?: string;
  Combobox?: {
    key: string;
    text: string;
  }[];
}

/**
 * Resuable - FormLabelInput
 * @description
 * Interface having details for FormLabelInput
 */
export interface XgFormLabelInput_Interface {
  data: {
    data: {
      Label: string;
      value: string | number;
      type: string;
      placeholder: string;
      component?: string;
    };
    index: number;
    __handleInput: (evt: string, index: number) => void;
  };
}

/**
 * Resuable - FormButton
 * @description
 * Interface having details for FormButton
 */
export interface XgFormButton_Interface {
  data: {
    data: {
      Text: string;
      type: string;
    };
    index: number;
    __handlesubmit: () => void;
  };
}

/**
 * Resuable - FormLabelCombobox
 * @description
 * Interface having details for FormLabelCombobox
 */
export interface XgFormLabelCombobox_Interface {
  data: {
    data: {
      Label: string;
      value: string;
      type: string;
      placeholder: string;
      component?: string;
      Combobox?: {
        key: string;
        text: string;
      }[];
    };
    index: number;
  };
}

/**
 * Message - Alert
 * @description
 * Interface having details for Message Alerts
 */
export interface Message_Interface {
  data: {
    state: {
      open: boolean;
      Msg: {
        severity: "success" | "info" | "warning" | "error" | undefined;
        text: string;
      };
    };
    handleCloseMessage: (
      event?: SyntheticEvent<Element, Event> | undefined,
      reason?: string | undefined
    ) => void;
  };
}

/**
 * Functions - Validate Form Data
 */
export interface Validate_LoginPageDetails_interface {
  User: string;
  Password: string;
}

/**
 * Login Page - Login Body
 * @description
 * Interface for Login Body
 */
export interface LoginPage_LoginBody_Interface {
  Label: string;
  value: string;
  type: string;
  placeholder: string;
}

/**
 * Main Page
 * @description
 * Interface for Main Page
 */
export interface MainPage_Provider_Interface {
  Ecommerce: boolean;
  DevOps: boolean;
  Mail: boolean;
  Survey: boolean;
}

/**
 * AppBar - useReducer
 * @description
 * Interface for AppBar
 */
export interface Appbar_useReducer_Interface {
  type?: string;
  open?: boolean | null | EventTarget | HTMLElement;
  selection?: string;
  search?: boolean;
}