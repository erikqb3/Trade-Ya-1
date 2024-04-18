import { slugify } from "./slugify";
export const shortenText = (text, limit) => {
  let present_text;
  if (text.length>limit) {
    if (text.includes(" ")){
      present_text = text.slice(0,limit-4).trim() + "..."
    }
    else {
      present_text = text.slice(0,limit-2).trim() + "..."
    }
  }
  else{
    present_text = text;
  }
	return present_text;
};
