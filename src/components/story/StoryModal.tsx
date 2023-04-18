import React, { FC } from "react";
import { Box, TextareaAutosize, Button } from "@mui/material";
import { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { my_modal, text_area } from "./style";
import {
  useAddStoryMutation,
  useUpdateStoryMutation,
} from "../../services/storyApi";

interface StoryModalProps {
  title?: string;
  story?: string;
  id?: number;
  close: () => void;
}

export const StoryModal: FC<StoryModalProps> = (props) => {
  const [title, setTitle] = useState(props.title || "");
  const [story, setStory] = useState(props.story || "");
  const [disable, setDisable] = useState(true);
  const [addStory] = useAddStoryMutation();
  const [updateStory] = useUpdateStoryMutation();
  document.getElementById("root")!.style.filter = "blur(3px)";

  useEffect(() => {
    if (story && story.trim() && title && title.trim()) setDisable(false);
    else setDisable(true);
  }, [story, title]);

  const handlePostSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.close();
    setTitle("");
    setStory("");
    addStory({ title, story });
    setDisable(true);
  };
  const handleUpdateSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.close();
    updateStory({ id: props.id!, title, story });
    setDisable(true);
  };

  return ReactDom.createPortal(
    <Box sx={my_modal}>
      <Box pt={5}>
        <TextareaAutosize
          minRows={2}
          placeholder="Title"
          id="outlined-multiline-static"
          style={{ resize: "vertical", width: "100%" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextareaAutosize
          minRows={15}
          placeholder="Story"
          style={text_area}
          id="outlined-multiline-static"
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
        <Button
          type="submit"
          disabled={disable}
          variant="contained"
          color="primary"
          onClick={props.id ? handleUpdateSubmit : handlePostSubmit}
        >
          {props.id ? "UPDATE" : "POST"}
        </Button>
        <Button variant="outlined" onClick={props.close}>
          Cancel
        </Button>
      </Box>
    </Box>,
    document.getElementById("portal")!
  );
};
