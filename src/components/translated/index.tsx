import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

export const withTranslation =
  (
    Comp: FunctionComponent<any>,
    translateProps: string[] = []
  ): FunctionComponent<any> =>
  (props) => {
    const { t } = useTranslation();
    const newProps = translateProps.reduce(
      (acc, prop) => {
        const { [prop]: val } = props;
        acc[prop] = t(val);
        return acc;
      },
      { ...props }
    );
    return <Comp {...newProps} />;
  };
