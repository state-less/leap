import { CardHeader } from "@mui/material";
import { useTranslation } from "react-i18next";
import { withTranslation } from ".";

export const TranslatedCardHeader = withTranslation(CardHeader, ["title"]);
