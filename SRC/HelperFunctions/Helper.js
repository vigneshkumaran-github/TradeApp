import Toast from "react-native-toast-message";

export const showToastGreen = msg => {
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: msg,
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
      swipeable:false
    });
  };
  
  export const showToastRed = msg => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: msg,
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
      swipeable:false
    });
  };