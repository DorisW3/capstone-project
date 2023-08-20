import { Fragment } from "react";
import Divider from "@mui/material/Divider";
import { EntriesList } from "./EntriesList";

export default function EntriesSection({ entriesList }) {
  return <EntriesList entriesList={entriesList} />;
}
