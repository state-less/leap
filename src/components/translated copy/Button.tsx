import { Button, ButtonProps } from "@mui/material";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

type TranslatedButtonProps = ButtonProps & {
  label?: string;
  children?: string;
};

export const TranslatedButton: FunctionComponent<TranslatedButtonProps> = (
  props
) => {
  const { children, label, ...rest } = props;
  const { t } = useTranslation();

  return <Button {...rest}>{t(label || children || '')}</Button>;
};
