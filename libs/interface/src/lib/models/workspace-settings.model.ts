import { Field, ObjectType } from "@nestjs/graphql";
import { Workspace } from "./workspace.model";

@ObjectType("WorkspaceSettings", {
  isAbstract: true
})
export class WorkspaceSettings {
  @Field(() => String, {
    nullable: false
  })
  id!: string;

  @Field(() => Date, {
    nullable: false
  })
  createdAt!: Date;

  @Field(() => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @Field(() => String, {
    nullable: false
  })
  localId!: string;

  @Field(() => String, {
    nullable: false
  })
  workspaceId!: string;

  workspace?: Workspace | null;
}
