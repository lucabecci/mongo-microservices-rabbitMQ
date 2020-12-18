import { Schema, model, Document, SchemaDefinition } from "mongoose";

interface ITask extends Document {
  title: string;
  descriptiton: string;
  priority: number;
}

class TaskSchema {
  private _schemaDefiniton: SchemaDefinition;
  public _taskSchema: Schema;

  constructor() {
    this._schemaDefiniton = {
      title: { type: String, required: true, length: 20 },
      description: { type: String, required: true, length: 80 },
      priority: { type: Number, required: true, default: 3 },
    };
    this._taskSchema = new Schema(this._schemaDefiniton, { timestamps: true });
  }
}

const taskSchema = new TaskSchema();

export default model<ITask>("Task", taskSchema._taskSchema);
