import { Tooltip } from "@mui/material";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

type TranslatedTooltipProps = {
  title: string;
};

export const TranslatedTooltip: FunctionComponent<TranslatedTooltipProps> = ({
  title,
  ...rest
}) => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t(title) as string} {...rest}>
      <span style={{ width: "100%" }}>{rest.children}</span>
    </Tooltip>
  );
};
