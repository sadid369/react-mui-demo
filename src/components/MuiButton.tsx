import { useState } from "react";
import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatBoldIcon from "@mui/icons-material/FormatBold";

export const MuiButton = () => {
  const [formats, setFormats] = useState<string | null>(null);
  console.log({ formats });
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={`row`}>
        <Button variant={`text`} href="https://google.com">
          Text
        </Button>
        <Button variant={`contained`}>Contained</Button>
        <Button variant={`outlined`}>Outlined</Button>
      </Stack>
      <Stack spacing={2} direction={`row`}>
        <Button variant={`contained`} color={`primary`}>
          Button
        </Button>

        <Button variant={`contained`} color={`secondary`}>
          Button
        </Button>
        <Button variant={`contained`} color={`error`}>
          Button
        </Button>
        <Button variant={`contained`} color={`warning`}>
          Button
        </Button>
        <Button variant={`contained`} color={`info`}>
          Button
        </Button>
        <Button variant={`contained`} color={`success`}>
          Button
        </Button>
      </Stack>
      <Stack display={`block`} spacing={2} direction={`row`}>
        {" "}
        <Button variant={`contained`} size={`small`}>
          Button
        </Button>
        <Button variant={`contained`} size={`medium`}>
          Button
        </Button>
        <Button variant={`contained`} size={`large`}>
          Button
        </Button>
      </Stack>
      <Stack spacing={2} direction={`row`}>
        <Button variant={`contained`} startIcon={<SendIcon />}>
          Send
        </Button>
        <Button
          variant={`contained`}
          endIcon={<SendIcon />}
          disableElevation
          disableRipple
          onClick={() => alert("Hello")}
        >
          Send
        </Button>
        <IconButton aria-label="send" color={"success"} size={`small`}>
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction={`row`}>
        <ButtonGroup
          variant={`text`}
          orientation={`vertical`}
          size={`small`}
          color={`secondary`}
          aria-label={`alignment button group`}
        >
          <Button onClick={() => alert("msg1")}>Left</Button>
          <Button onClick={() => alert("msg2")}>Center</Button>
          <Button onClick={() => alert("msg3")}>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={`row`}>
        <ToggleButtonGroup
          aria-label={`text formatting`}
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value={`bold`} aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value={`italic`} aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value={`underline`} aria-label="underline">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
