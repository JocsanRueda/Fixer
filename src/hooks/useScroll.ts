import { useEffect } from "react";
import { Keyboard, Platform } from "react-native";

export type useScrollType = {
  setKeyboardHeight: (height: number) => void;
};

export function useScroll({ setKeyboardHeight }: useScrollType) {
  useEffect(() => {
    // Android edge-to-edge doesn't resize the window, so KeyboardAvoidingView can't detect
    // the keyboard height reliably — track it manually and reserve scroll space instead.
    const showEvent = Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent = Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const showSub = Keyboard.addListener(showEvent, (event) => {
      setKeyboardHeight(event.endCoordinates.height);
    });
    const hideSub = Keyboard.addListener(hideEvent, () => setKeyboardHeight(0));

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, [setKeyboardHeight]);
}
