import mongoose from "mongoose";

const Menu = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    no_table: {
      type: String,
      required: true,
    },
    status_menu: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Menu", Menu);
