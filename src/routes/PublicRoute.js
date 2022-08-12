import { Route, Redirect } from "react-router-dom";

import { isLogin } from "../helper/isLogin";

const PublicRoutes = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect  to={{
            pathname: "/",
            state: { from: props.location },
          }}/>
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoutes;
