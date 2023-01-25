import { Field, InputType } from "@nestjs/graphql";

@InputType("WorkspaceSettingsCreateWithoutWorkspaceInput", {
  isAbstract: true
})
export class WorkspaceSettingsCreateWithoutWorkspaceInput {
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
  localId!: string;

  @Field(() => String, {
    nullable: false
  })
  workspaceId!: string;
}
