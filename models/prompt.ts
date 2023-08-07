import { InferSchemaType, Schema, model, models } from "mongoose";
import {UserModel} from "./user";

const PromptSchema = new Schema({
  creator: { type: Schema.Types.ObjectId, ref: UserModel },
  prompt: { type: String, required: [true, "Prompt is required"] },
  tag: { type: String, required: [true, "Tag is required"] },
});

export type Prompt = InferSchemaType<typeof PromptSchema>;
export const PromptModel = models.Prompt || model("Prompt", PromptSchema);
