import { Theme, tokens, webLightTheme } from "@fluentui/react-components";

type CustomTheme = Theme & {
  borderRadiusMassive: string;
};

export const customTheme: CustomTheme = {
  ...webLightTheme,
  borderRadiusMassive: "48px"
};

export const customTokens: Record<keyof CustomTheme, string> = {
  ...tokens,
  borderRadiusMassive: `var(--borderRadiusMassive)`
};