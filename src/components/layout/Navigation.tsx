import { memo } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { USERS_ROLE } from "../../constants";
import { changeRole } from "../../redux/app/appSlice";
import { privateRoutes } from "../../router";
import { checkPermissions } from "../../until/helpers";
import { Col, Row } from "../elements";
import { BasicRoute } from "../elements/AppRouter";

interface Props {
  role: string;
}

const Navigation = ({ role }: Props) => {
  const history = useHistory();
  const privateMenu = privateRoutes;
  const dispatch = useAppDispatch();

  const renderParentMenuItem = (item: BasicRoute, parentPath: any) => {
    const fullPath =
      parentPath && parentPath !== "/"
        ? `${parentPath}${item.path}`
        : item.path;
    const hasPermission = checkPermissions(role || "", item.roles);
    if (!hasPermission) {
      return null;
    }

    return (
      <Col key={fullPath} sx={{ height: "100%" }}>
        <Row sx={{ cursor: "pointer" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "2em" }}>
            {item.label}
          </Typography>
        </Row>
        <Col sx={{}}>
          {item.routes &&
            item.routes.map((routes) => {
              return renderMenuItems(routes, item.path);
            })}
        </Col>
      </Col>
    );
  };

  const renderSingleMenuItem = (item: BasicRoute, parentPath: any) => {
    const hasPermission = checkPermissions(role || "", item.roles);
    if (!hasPermission) {
      return null;
    }
    const fullPath =
      parentPath && parentPath !== "/"
        ? `${parentPath}${item.path}`
        : item.path;
    return (
      <Row key={fullPath}>
        <Typography
          onClick={() => history.push(`${fullPath}`)}
          sx={{ cursor: "pointer" }}
        >
          {item.label}
        </Typography>
      </Row>
    );
  };

  const renderMenuItems = (item: BasicRoute, parentPath = ""): any => {
    if (item.routes) {
      if (item.label) {
        return renderParentMenuItem(item, item.path);
      }
      return item.routes.map((route) => {
        return renderMenuItems(route, parentPath);
      });
    }
    if (item.label) {
      return renderSingleMenuItem(item, parentPath);
    }
    return null;
  };

  const handleChooseRole = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    dispatch(changeRole(value));
  };

  return (
    <Row
      sx={{
        width: "100%",
        justifyContent: "space-around",
        position: "fixed",
      }}
    >
      {privateMenu.map((item) => {
        return renderMenuItems(item, item.path);
      })}
      <Row sx={{ marginTop: "40px", position: "absolute", bottom: "-100px" }}>
        <FormControl margin="normal" fullWidth>
          <InputLabel>Choose Roles:</InputLabel>
          <Select
            value={role}
            label="Choose Roles"
            onChange={handleChooseRole}
            sx={{ width: "200px" }}
          >
            <MenuItem value={USERS_ROLE.ADMIN}>{USERS_ROLE.ADMIN}</MenuItem>
            <MenuItem value={USERS_ROLE.CUSTOMER}>
              {USERS_ROLE.CUSTOMER}
            </MenuItem>
            <MenuItem value={USERS_ROLE.STAFF}>{USERS_ROLE.STAFF}</MenuItem>
          </Select>
        </FormControl>
      </Row>
    </Row>
  );
};

export default memo(Navigation);
