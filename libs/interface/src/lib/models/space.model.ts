import { Field, ObjectType } from "@nestjs/graphql";
import { SpaceCount } from "../outputs/SpaceCount";
import { Chat } from "./chat.model";
import { Project } from "./project.model";
import { SpaceSettings } from "./space-settings.model";
import { SpaceView } from "./space-view.model";

@ObjectType("Space", {
  isAbstract: true
})
export class Space {
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
  viewId!: string;

  @Field(() => String, {
    nullable: false
  })
  projectId!: string;

  @Field(() => String, {
    nullable: false
  })
  settingsId!: string;

  @Field(() => String, {
    nullable: false
  })
  spaceType!: string;

  @Field(() => String, {
    nullable: true
  })
  parentId?: string | null;

  @Field(() => String, {
    nullable: true
  })
  chatId?: string | null;

  chat?: Chat | null;

  parent?: Space | null;

  project?: Project;

  settings?: SpaceSettings;

  view?: SpaceView;

  subspaces?: Space[];

  @Field(() => SpaceCount, {
    nullable: true
  })
  _count?: SpaceCount | null;
}
