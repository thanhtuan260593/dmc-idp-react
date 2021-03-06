import { Spinner } from "components/utils";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { idp } from "resources";
const queryString = require("query-string");
export const Consent = () => {
  const location = useLocation();
  useEffect(() => {
    const query = queryString.parse(location.search);
    const challenge = query.consent_challenge;
    idp
      .acceptConsent(challenge)
      .then((res) => (window.location.href = res.redirect_to))
      .catch(() => (window.location.href = "/"));
  }, [location.search]);
  return (
    <div className="flex justify-center">
      <Spinner />
    </div>
  );
};
