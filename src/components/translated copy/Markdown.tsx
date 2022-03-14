import { useTranslation } from "react-i18next";
import Markdown from "react-markdown";

export const TranslatedMarkdown = (props) => {
  const { children, ...rest } = props;
  const { t } = useTranslation();
  return <Markdown {...rest}>{t(children)}</Markdown>;
};
