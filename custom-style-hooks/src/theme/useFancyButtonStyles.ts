import { makeStyles, mergeClasses, type ButtonState } from "@fluentui/react-components";
import { customTokens } from "./tokens";

export const useStyles = makeStyles({
  root: {
    borderRadius: customTokens.borderRadiusMassive,
    cursor: "pointer",
    backgroundColor: "white",
    border: "1px solid #fed1ff",
    transition: "background-color 0.2s",
    "&:hover": {
      backgroundColor: "#fed1ff",
      border: "1px solid #fed1ff",
    }
  },
  icon: {
    color: "blue",
    backgroundColor: "white",
  }
});

export const useFancyButtonStyles = (state: unknown) => {
  const buttonState = state as ButtonState;
  const styles = useStyles();
  buttonState.root.className = mergeClasses(buttonState.root.className, styles.root);

  if (buttonState.icon) {
    buttonState.icon.className = mergeClasses(buttonState.icon.className, styles.icon);
  }
};