import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./../../lib/components/Button";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as Icon from "react-feather";
import { withKnobs, select, text, boolean } from "@storybook/addon-knobs/react";
import { action, configureActions } from "@storybook/addon-actions";

storiesOf("Components|Button", module)
  .addDecorator(withKnobs)
  .add("Default", () => {
    const IconLeft = Icon[select("Left icon", Object.keys(Icon), "User")];
    const IconRight =
      Icon[select("Right icon", Object.keys(Icon), "ChevronRight")];
    const IconLeftEnabled = boolean("Left icon enabled", true);
    const IconRightEnabled = boolean("Right icon enabled", true);

    return (
      <Router>
        <div>
          <Button
            text={text("Text", `Button`)}
            size={select(
              "Size",
              ["small", "medium", "large", "xlarge"],
              "medium"
            )}
            theme={select(
              "Theme",
              ["red", "blue", "green", "grey", "white"],
              "red"
            )}
            onClick={action("button-click")}
            leftIcon={IconLeftEnabled && <IconLeft />}
            rightIcon={IconRightEnabled && <IconRight />}
            isOutline={boolean("Is outline", true)}
          />
        </div>
      </Router>
    );
  });
