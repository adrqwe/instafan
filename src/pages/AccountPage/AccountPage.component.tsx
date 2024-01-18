import { Button } from "@mui/material";
import { useEffect } from "react";

import { IAccountPageProps } from "./AccountPage.types";
import { useStyles } from "./AccountPage.style";
import { useTranslationContext } from "../../models/translationsContext/translationsContext";
import routes from "../../navigator/routes";

const AccountPage = ({ getCheckExistTokenDetails }: IAccountPageProps) => {
  const classes = useStyles();

  const { translate } = useTranslationContext();
  const translations = translate("accountPage");

  useEffect(() => {
    if (!getCheckExistTokenDetails.valid) {
      window.location.replace(routes.login);
    }
  }, []);

  const logoutAction = () => {
    localStorage.setItem("access_token", "");
    sessionStorage.setItem("access_token", "");
    window.location.replace(routes.login);
  };

  return (
    <div className={classes.container}>
      <Button variant="text" onClick={logoutAction}>
        {translations.logout}
      </Button>
    </div>
  );
};

export default AccountPage;
