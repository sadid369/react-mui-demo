import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const MuiCheckbox = () => {
  const [acceptTnc, setAcceptTnc] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log(skills);
  const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  console.log(acceptTnc);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(event.target.checked);
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept term and contions"
          control={
            <Checkbox
              checked={acceptTnc}
              onChange={handleChange}
              size={`medium`}
              color={`secondary`}
            ></Checkbox>
          }
        ></FormControlLabel>
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnc}
          onChange={handleChange}
        ></Checkbox>
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  checked={skills.includes("html")}
                  onChange={handleSkillsChange}
                ></Checkbox>
              }
            ></FormControlLabel>
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox
                  checked={skills.includes("css")}
                  onChange={handleSkillsChange}
                ></Checkbox>
              }
            ></FormControlLabel>
            <FormControlLabel
              label="JavaScript"
              value="JavaScript"
              control={
                <Checkbox
                  checked={skills.includes("JavaScript")}
                  onChange={handleSkillsChange}
                ></Checkbox>
              }
            ></FormControlLabel>
          </FormGroup>
          <FormHelperText>Invalid Selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};
