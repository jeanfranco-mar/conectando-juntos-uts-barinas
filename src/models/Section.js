import mongoose from "mongoose";

const SectionSchema = new mongoose.Schema(
  {
    sectionId: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    images: [
      {
        url: String,
        publicId: String,
        alt: String,
      },
    ],
    content: {
      type: mongoose.Schema.Types.Mixed,
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Section ||
  mongoose.model("Section", SectionSchema);
