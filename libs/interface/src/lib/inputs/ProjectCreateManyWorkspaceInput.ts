import { Field, InputType } from "@nestjs/graphql";

@InputType("ProjectCreateManyWorkspaceInput", {
  isAbstract: true
})
export class ProjectCreateManyWorkspaceInput {
  @Field(() => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(() => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(() => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @Field(() => String, {
    nullable: false
  })
  title!: string;

  @Field(() => String, {
    nullable: true
  })
  description?: string | undefined;

  @Field(() => String, {
    nullable: false
  })
  settingsId!: string;

  @Field(() => String, {
    nullable: false
  })
  ownerId!: string;

  @Field(() => String, {
    nullable: true
  })
  chatId?: string | undefined;
}
