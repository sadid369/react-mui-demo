import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={`row`}>
        <TextField label="Name" variant={`outlined`} size={"small"} />
        <TextField label="Name" variant={`filled`} />
        <TextField label="Name" variant={`standard`} />
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <TextField label="Name" size="small" color="secondary" />
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <TextField
          label="From Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Dont show any one"}
        />
        <TextField label="From Input" required helperText="Dont show" />
        <TextField label="Password" type={"password"} />
        <TextField label="Disable" disabled />
        <TextField
          label="Read only"
          type={"password"}
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
